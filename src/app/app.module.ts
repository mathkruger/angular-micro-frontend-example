import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MicroAppsRouterOutletComponent } from './components/micro-apps-router-outlet/micro-apps-router-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    MicroAppsRouterOutletComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
