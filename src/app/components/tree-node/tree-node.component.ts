import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { TreeNode } from '../../models/model';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="tree-node"
      [class.is-category]="isCategory()"
      [class.is-leaf]="!isCategory()"
      [class.is-search-result]="isSearchResult()"
      (click)="onNodeClick()">

      <div class="node-content">
        <div class="node-icon">
        <img class="icon" [src]="node().icon"/>
        </div>

        <div class="node-info">
          <h3 class="node-name">{{ node().name }}</h3>
          @if (node().description) {
          <p class="node-description">{{ node().description }}</p>
          }
          @if (isCategory() && node().children!.length ){
          <div class="node-meta" >
            <span class="children-count">{{ node().children!.length }} items</span>
          </div>
          }
        </div>

@if (isSearchResult()) {
  <div class="node-description">{{node().path}}</div>
}

        @if(isCategory()) {
        <div class="node-action">
          <span class="arrow-icon"></span>
        </div>
        }
      </div>
    </div>
  `,
  styleUrl: 'tree-node.component.scss'
})
export class TreeNodeComponent {
  node = input.required<TreeNode>();
  isSearchResult = input(false);
  nodeSelected = output<TreeNode>();

  isCategory = computed(() => {
    const node = this.node();
    return node.children;
  });

  onNodeClick(): void {
    this.nodeSelected.emit(this.node());
  }
}