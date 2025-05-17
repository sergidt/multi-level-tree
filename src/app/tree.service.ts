import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TREE_DATA } from './models/data';
import { BreadcrumbItem, TreeNode } from './models/model';


@Injectable({
  providedIn: 'root'
})
export class TreeService {
  data: TreeNode[] = TREE_DATA;

  currentTree = signal<TreeNode[]>(this.data);

  selectedNode = signal<TreeNode | undefined>(undefined);


  breadcrumb = signal<BreadcrumbItem[]>([]);

  private searchResultsSource = new BehaviorSubject<TreeNode[]>([]);
  // TODO: RESOURCE
  searchResults$ = this.searchResultsSource.asObservable();

  constructor() { }

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

      // Update breadcrumb
      const newBreadcrumb = [...this.breadcrumb(), { id: node.id, name: node.name }];
      this.breadcrumb.set(newBreadcrumb);
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
      this.currentTree.set(this.data);
    } else {
      // Find the node that corresponds to this breadcrumb
      let currentLevel = this.data;
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
    this.currentTree.set(this.data);
    this.breadcrumb.set([]);
    this.selectedNode.set(undefined);
  }

  search(query: string): void {
    if (!query.trim()) {
      this.searchResultsSource.next([]);
      return;
    }

    const results = this.searchNodes(this.data, query.toLowerCase());
    this.searchResultsSource.next(results);
  }

  private searchNodes(nodes: TreeNode[], query: string): TreeNode[] {
    const results: TreeNode[] = [];

    for (const node of nodes) {
      if (node.name.toLowerCase().includes(query) ||
        (node.description && node.description.toLowerCase().includes(query))) {
        results.push(node);
      }

      if (node.children && node.children.length > 0) {
        const childResults = this.searchNodes(node.children, query);
        results.push(...childResults);
      }
    }

    return results;
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
