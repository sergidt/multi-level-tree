import { inject, Injectable, signal } from '@angular/core';
import { BreadcrumbItem, TreeNode } from '../models/model';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class TreeService {
  dataService = inject(DataService);

  currentTree = signal<TreeNode[]>(this.dataService.data);

  selectedNode = signal<TreeNode | undefined>(undefined);

  breadcrumb = signal<BreadcrumbItem[]>([]);

  searchTerm = signal<string>('');

  getTopLevelNodes(): TreeNode[] {
    return this.currentTree();
  }

  selectNode(node: TreeNode): void {
    this.selectedNode.set(node);

    if (node.children && node.children.length > 0) {
      this.navigateToNode(node);
    }
  }

  navigateToNode(node: TreeNode): void {
    if (node.children) {
      this.currentTree.set(node.children);
      this.breadcrumb.set([...this.breadcrumb(), { id: node.id, name: node.name }]);
    }
  }

  navigateToBreadcrumb(breadcrumbItem: BreadcrumbItem): void {
    const currentBreadcrumb = this.breadcrumb();
    const index = currentBreadcrumb.findIndex(item => item.id === breadcrumbItem.id);

    if (index === -1) return;

    // Update breadcrumb
    const newBreadcrumb = currentBreadcrumb.slice(0, index + 1);
    this.breadcrumb.set(newBreadcrumb);

    // Update current tree
    if (index === 0) {
      // Root level
      this.currentTree.set(this.dataService.data);
    } else {
      // Find the node that corresponds to this breadcrumb
      let currentLevel = this.dataService.data;
      for (let i = 0; i < index; i++) {
        const nodeId = currentBreadcrumb[i].id;
        const node = this.findNodeById(currentLevel, nodeId);
        if (node && node.children) {
          currentLevel = node.children;
        }
      }
      this.currentTree.set(currentLevel);
    }
  }

  navigateToRoot(): void {
    this.currentTree.set(this.dataService.data);
    this.breadcrumb.set([]);
    this.selectedNode.set(undefined);
  }

  private findNodeById(nodes: TreeNode[], id: string): TreeNode | null {
    for (const node of nodes) {
      if (node.id === id) {
        return node;
      }

      if (node.children && node.children.length > 0) {
        const foundInChildren = this.findNodeById(node.children, id);
        if (foundInChildren) {
          return foundInChildren;
        }
      }
    }

    return null;
  }
}
