import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";

const routes: Routes = [
  {
    path: 'site/home',
    component: HomeComponent
  },
  {
    path: 'site',
    redirectTo: 'site/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}