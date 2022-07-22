import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';

import { InitContainerComponent } from './containers/init-container/init-container.component'

const routes: Routes = [
  { path:'', component: BlogComponent, children:
  [
    { path: 'init', component: InitContainerComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
