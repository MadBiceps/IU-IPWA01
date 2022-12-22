import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumPageComponent } from './pages/impressum-page/impressum-page.component';

const routes: Routes = [
  {
    path: 'impressum',
    component: ImpressumPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
