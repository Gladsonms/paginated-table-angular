import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.css']
})
export class PaginatedTableComponent implements OnInit {
  users: any[] = [];
  page: number = 1;
  perPage: number = 5;
  total: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const url = `https://reqres.in/api/users?page=${this.page}&per_page=${this.perPage}`;
    this.http.get(url).subscribe((response: any) => {
      this.users = response.data;
      this.total = response.total;
    });
  }

  onPageChange(newPage: number): void {
    this.page = newPage;
    this.fetchData();
  }

  onPerPageChange(newPerPage: number): void {
    this.perPage = newPerPage;
    this.page = 1; // Reset to the first page
    this.fetchData();
  }
}