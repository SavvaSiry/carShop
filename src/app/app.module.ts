import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AppRoutingModule } from './app-routing.module';
import { CarpageComponent } from './carpage/carpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CarpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
