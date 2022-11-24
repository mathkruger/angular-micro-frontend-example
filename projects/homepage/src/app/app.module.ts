import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [		
    AppComponent,
    HomepageComponent,
    EmptyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}
  
  ngDoBootstrap() {
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('micro-app-homepage', elem);
  }
}
