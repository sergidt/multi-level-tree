import { effect, Injectable, resource, signal } from '@angular/core';
import { TREE_DATA } from '../models/data';
import { TreeNode } from '../models/model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: TreeNode[] = TREE_DATA;

  searchQuery = signal<string>('');

  searchResults = resource<TreeNode[], string>({
    request: () => this.searchQuery(),
    loader: async ({ request, abortSignal }) => {
      return !request.trim()
        ? []
        : this.searchNodes(this.data, request.toLowerCase())
    }
  });

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

  findNodeById(nodes: TreeNode[], id: string): TreeNode | null {
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

  constructor() {
    effect(() =>
      console.log(this.searchResults.value())
    );
  }
}
