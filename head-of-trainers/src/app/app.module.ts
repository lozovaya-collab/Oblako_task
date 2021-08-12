import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './main/body/body.component';
import { TabsComponent } from './main/body/tabs/tabs.component';
import { FiltersComponent } from './main/body/filters/filters.component';
import { ListComponent } from './main/body/list/list.component';
import { MenuComponent } from './main/body/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BodyComponent,
    TabsComponent,
    FiltersComponent,
    ListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
