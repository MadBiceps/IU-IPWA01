import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';

const routes: Routes = [
  {
    path: 'imprint',
    component: ImprintPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
