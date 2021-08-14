import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './main/body/body.component';
import { TabsComponent } from './main/body/tabs/tabs.component';
import { FiltersComponent } from './main/body/filters/filters.component';
import { ListComponent } from './main/body/list/list.component';
import { MenuComponent } from './main/body/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlotComponent } from './main/body/list/slot/slot.component';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatMenuModule

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BodyComponent,
    TabsComponent,
    FiltersComponent,
    ListComponent,
    MenuComponent,
    SlotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules

  ],
  exports:[
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
