import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TreeNode } from '../../models/model';
import { DataService } from '../../services/data.service';
import { TreeService } from '../../services/tree.service';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { NodeDetailComponent } from "../node-detail/node-detail.component";
import { SearchBarComponent } from "../search/search-bar.component";
import { TreeNodeComponent } from "../tree-node/tree-node.component";

@Component({
  selector: 'app-tree-view',
  template: `
     <div class="tree-view-container">
      <header class="tree-view-header">
        <h1>Category Explorer</h1>
        <app-search-bar></app-search-bar>
      </header>

      <app-breadcrumb></app-breadcrumb>

      <div class="content-container">
        <div class="tree-nodes-container">
          @if(searchResults.hasValue()) {
            <div class="tree-nodes-list fade-in">
            @for (node of treeService.currentTree(); track $index) {
              <app-tree-node
                [node]="node"
                (nodeSelected)="onNodeSelected($event)"/>
            }
            </div>
              }@else if(searchResults.hasValue()) {
            <h2 class="section-title">Search Results</h2>
            <div class="search-results-list fade-in">
              @for (node of searchResults.value(); track $index) {
              <app-tree-node
                [node]="node"
                [isSearchResult]="true"
                (nodeSelected)="onNodeSelected($event)"/>
            }
            </div>
              }
        </div>

        @if(treeService.selectedNode()) {
        <app-node-detail
          [selectedNode]="treeService.selectedNode()!"/>
        }
      </div>
    </div>
    `,
  styleUrl: 'tree-view.component.scss',
  imports: [SearchBarComponent, BreadcrumbComponent, TreeNodeComponent, NodeDetailComponent, CommonModule]
})
export class TreeViewComponent {
  treeService = inject(TreeService);
  dataService = inject(DataService);

  searchResults = this.dataService.searchResults;

  onNodeSelected(node: TreeNode): void {
    this.treeService.selectNode(node);
  }
}
