import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotCompletedComponent } from './core/shared/config-pages/not-completed/not-completed.component';
import { NotFoundComponent } from './core/shared/config-pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: '**', component: NotFoundComponent },
  { path: 'not-completed', component : NotCompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
