import { CommonModule } from '@angular/common';
import { Component, inject, linkedSignal, OnInit } from '@angular/core';
import { TreeNode } from '../../models/model';
import { TreeService } from '../../tree.service';
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
          @if(searchResults.length <= 0) {
            <h2 class="section-title">{{ currentLevel() }}</h2>
            <div class="tree-nodes-list fade-in">
            @for (node of treeService.currentTree(); track $index) {
              <app-tree-node
                [node]="node"
                (nodeSelected)="onNodeSelected($event)"/>
            }
            </div>
              }@else if(searchResults.length > 0) {
            <h2 class="section-title">Search Results</h2>
            <div class="search-results-list fade-in">
              @for (node of searchResults; track $index) {
              <app-tree-node
                [node]="node"
                [isSearchResult]="true"
                (nodeSelected)="onNodeSelected($event)"/>
            }
              <button
                class="clear-search-button"
                (click)="clearSearch()">
                Clear Search
              </button>
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
export class TreeViewComponent implements OnInit {

  treeService = inject(TreeService);

  currentLevel = linkedSignal({
    source: this.treeService.breadcrumb,
    computation: () => {
      const breadcrumb = this.treeService.breadcrumb();

      return breadcrumb.length > 0
        ? breadcrumb[breadcrumb.length - 1].name
        : 'Categories';

    }
  });

  searchResults: TreeNode[] = [];

  ngOnInit(): void {
    this.treeService.searchResults$.subscribe(results => {
      this.searchResults = results;
    });
  }

  onNodeSelected(node: TreeNode): void {
    this.treeService.selectNode(node);
  }

  clearSearch(): void {
    this.treeService.search('');
  }
}
