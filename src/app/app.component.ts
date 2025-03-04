import { Component } from '@angular/core';
import { PaginatedTableComponent } from './paginated-table/paginated-table.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[PaginatedTableComponent]
})
export class AppComponent {
  title = 'paginated-table-app';
}