import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { ImpressumPageComponent } from './pages/impressum-page/impressum-page.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, ImpressumPageComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTshirt);
  }
}
