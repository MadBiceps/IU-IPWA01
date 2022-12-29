import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faPlus, faTrash, faTruckRampBox, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, ImprintPageComponent, PrivacyPageComponent, FormComponent, RegisterPageComponent, HomePageComponent, FormErrorComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTshirt, faPlus, faLocationDot, faTruckRampBox, faTrash);
  }
}
