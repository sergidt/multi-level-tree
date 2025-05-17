import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { debounceTime, fromEvent } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-bar">
      <div class="search-input-container">
        <input
        #searchInput
          type="text"
          class="search-input"
          placeholder="Search categories and items..."
        />

        @if(dataService.searchQuery()) {
        <button
          class="clear-button"
          (click)="clearSearchQuery()">
          ×
        </button>
        }
      </div>
    </div>
  `,
  styleUrl: 'search-bar.component.scss'
})
export class SearchBarComponent implements AfterViewInit {
  dataService = inject(DataService);
  destroyRef = inject(DestroyRef);
  input = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');

  ngAfterViewInit() {
    fromEvent(this.input().nativeElement, 'input')
      .pipe(
        debounceTime(250),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(_ => this.dataService.searchQuery.set((_.target as HTMLInputElement).value));
  }

  clearSearchQuery() {
    this.input().nativeElement.value = '';
    this.dataService.searchQuery.set('')
  }
}
