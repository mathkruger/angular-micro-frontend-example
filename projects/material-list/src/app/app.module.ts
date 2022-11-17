import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { ListComponent } from './list/list.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    ListComponent
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
    customElements.define('micro-app-material-list', elem);
  }
}
