import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzDividerModule} from "ng-zorro-antd/divider";
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzButtonModule} from "ng-zorro-antd/button";

const appRoutes: Routes = [
  { path: 'table', component: TableComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzTableModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NzTabsModule,
    NzDividerModule,
    FormsModule,
    NzModalModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
