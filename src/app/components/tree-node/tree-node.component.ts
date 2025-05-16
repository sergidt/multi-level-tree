import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNode } from '../../models/model';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="tree-node"
      [class.is-category]="node.isCategory"
      [class.is-leaf]="!node.isCategory"
      [class.is-search-result]="isSearchResult"
      (click)="onNodeClick()">

      <div class="node-content">
        <div class="node-icon" [class]="node.iconClass || 'default-icon'"></div>

        <div class="node-info">
          <h3 class="node-name">{{ node.name }}</h3>
          @if (node.description) {
          <p class="node-description">{{ node.description }}</p>
          }
          @if (node.isCategory && node.children){
          <div class="node-meta">
            <span class="children-count">{{ node.children.length }} items</span>
          </div>
          }
        </div>

        @if(node.isCategory) {
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
  @Input() node!: TreeNode;
  @Input() isSearchResult: boolean = false;
  @Output() nodeSelected = new EventEmitter<TreeNode>();

  onNodeClick(): void {
    this.nodeSelected.emit(this.node);
  }
}