import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/reactive-forms',
    pathMatch: 'full'
  },
  {
    path:'reactive-forms',
    component: ReactiveFormComponent
  },
  {
    path:'template-driven-form',
    component: TemplateDrivenFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
