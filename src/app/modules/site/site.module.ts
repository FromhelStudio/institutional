import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteActionHeaderComponent } from './core/components/site-action-header/site-action-header.component';
import { NameFormatterPipe } from './shared/pipes/name-formatter.pipe';
import { HomeComponent } from './features/home/home.component';
import { SiteRoutingModule } from './site-routing.module';



@NgModule({
  declarations: [
    SiteActionHeaderComponent,
    NameFormatterPipe,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
