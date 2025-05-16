import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeService } from '../../tree.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-bar">
      <div class="search-input-container">
        <input
          type="text"
          class="search-input"
          placeholder="Search categories and items..."
          [(ngModel)]="searchQuery"
          (input)="onSearch()"
        />

        @if(searchQuery) {
        <button
          class="clear-button"
          (click)="clearSearch()">
          ×
        </button>
        }
      </div>
    </div>
  `,
  styleUrl: 'search-bar.component.scss'
})
export class SearchBarComponent {
  searchQuery: string = '';

  private treeService = inject(TreeService);

  onSearch(): void {
    this.treeService.search(this.searchQuery);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.treeService.search('');
  }
}
