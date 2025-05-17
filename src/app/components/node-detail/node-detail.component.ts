import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TreeNode } from '../../models/model';

@Component({
  selector: 'app-node-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
 @if (selectedNode()) {
@let node = selectedNode();

    <div class="node-detail slide-in">
      <div class="node-header">
        <div class="node-icon large" >{{node.icon}}</div>
        <h2>{{ node.name }}</h2>
      </div>

      <div class="node-info-section">
        <p class="description">{{ node.description }}</p>

        <div class="metadata-section" *ngIf="node.metadata">
          <h3>Details</h3>
          @for (item of metadataItems; track $index) {
          <dl>
            <dt>{{ formatLabel(item.key) }}:</dt>
            <dd>{{ formatValue(item.value) }}</dd>
          </dl>
          }
        </div>

        <div class="children-summary" *ngIf="isCategory() && node.children">
          <p>
            <span class="children-count">{{ node.children.length }}</span> items
          </p>

          @if (node.children.length > 0) {
          <ul class="children-list" >
            @for (child of node.children; track child.id) {
            <li >
              {{ child.name }}
            @if (child.children) {
              <span>({{ child.children!.length || 0 }} items)</span>
            }
            </li>
            }
          </ul>
            }
        </div>
      </div>
    </div>
 }
  `,
  styleUrl: 'node-detail.component.scss'
})
export class NodeDetailComponent {
  selectedNode = input.required<TreeNode>();

  isCategory = computed(() => {
    const node = this.selectedNode();
    return node.children;
  });

  get metadataItems(): { key: string, value: any }[] {
    if (!this.selectedNode().metadata) return [];

    return Object.entries(this.selectedNode().metadata!).map(([key, value]) => ({
      key,
      value
    }));
  }

  formatLabel(key: string): string {
    return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
  }

  formatValue(value: any): string {
    if (typeof value === 'number') {
      // Check if it looks like a price
      if (this.metadataItems.some(item => item.key === 'price')) {
        return `$${value.toFixed(2)}`;
      }

      // Check if it looks like a rating
      if (value >= 0 && value <= 5 && this.metadataItems.some(item => item.key === 'rating')) {
        return `${value.toFixed(1)} ★`;
      }
    }

    return String(value);
  }
}