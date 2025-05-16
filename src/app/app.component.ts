import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TreeViewComponent } from './components/tree-view/tree-view.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TreeViewComponent],
  template: `
    <app-tree-view></app-tree-view>
  `
})
export class AppComponent {
  title = 'Tree Structure Visualization';
}
