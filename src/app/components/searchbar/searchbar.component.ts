import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'piral-ng/common';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
})
export class SearchbarComponent {
  @Output() searchFilterEmitter = new EventEmitter<string>();

  @Input() currentFolder: string = '';
  searchFilter: string = '';

  emitSearchFilter() {
    this.searchFilterEmitter.emit(this.searchFilter);
  }
  resetSearchFilter() {
    this.searchFilter = '';
    this.searchFilterEmitter.emit(this.searchFilter);
  }
}
