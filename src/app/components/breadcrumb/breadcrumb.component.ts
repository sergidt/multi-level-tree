import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreadcrumbItem } from '../../models/model';
import { DataService } from '../../services/data.service';
import { TreeService } from '../../services/tree.service';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule],
  template: `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <a href="javascript:void(0)" (click)="navigateToRoot()">Organizational Structure</a>
        </li>
        @for (item of treeService.breadcrumb(); track $index; let last = $last) {
        <li>
          <a
            href="javascript:void(0)"
            [class.active]="last"
            (click)="navigateToBreadcrumb(item)">
            {{ item.name }}
          </a>
        </li>
        }
      </ol>
    </nav>
  `,
  styleUrl: 'breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  treeService = inject(TreeService);
  dataService = inject(DataService);

  navigateToBreadcrumb(item: BreadcrumbItem): void {
    this.dataService.searchQuery.set('');
    this.treeService.navigateToBreadcrumb(item);
  }

  navigateToRoot(): void {
    this.treeService.navigateToRoot();
  }
}
