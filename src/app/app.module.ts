import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { PaginatedTableComponent } from './paginated-table/paginated-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @NgModule({
//   declarations: [
//     AppComponent,
//     PaginatedTableComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule,
//     MatTableModule,
//     MatPaginatorModule,
//     MatSelectModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    PaginatedTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }