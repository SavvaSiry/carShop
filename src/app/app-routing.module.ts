import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./catalog/catalog.component";
import {CarpageComponent} from "./carpage/carpage.component";

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'carpage', component: CarpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
