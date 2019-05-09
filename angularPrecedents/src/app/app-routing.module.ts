import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';

const routes: Routes = [
  { path: '', component: TemplateDrivenComponent },
  { path: 'formtemplatedriven', component: TemplateDrivenComponent },
  { path: 'formtemplatedriven/:td_id', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
