import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';

const routes: Routes = [
  {
    path: 'imprint',
    component: ImprintPageComponent
  },
  {
    path: 'privacy',
    component: PrivacyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
