import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MAterial
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ComponentsTableComponent } from './components-table/components-table.component';


@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatButtonModule, MatIconModule, MatExpansionModule, MatInputModule,
    BrowserAnimationsModule, MatTabsModule, MatSelectModule],
  declarations:
    [AppComponent,
      HelloComponent,
      DynamicTableComponent,
      ComponentsTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
