import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './config-pages/not-found/not-found.component';
import { NotCompletedComponent } from './config-pages/not-completed/not-completed.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { FooterComponent } from './global/footer/footer.component';




@NgModule({
  declarations: [
    NotFoundComponent,
    NotCompletedComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    NotFoundComponent,
    NotCompletedComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: []
})
export class SharedModule { }
