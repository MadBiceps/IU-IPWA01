import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
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
