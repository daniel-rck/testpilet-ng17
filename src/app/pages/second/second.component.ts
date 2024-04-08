import { Component } from '@angular/core';
import { SearchbarComponent } from 'app/components/searchbar/searchbar.component';

@Component({
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  standalone: true,
  imports: [SearchbarComponent],
})
export class SecondPageComponent {
  setSearchFilter(searchFilter: string) {
    alert(searchFilter);
  }
}
