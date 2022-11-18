import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MicroAppConfig } from '../models/micro-app-config';

@Injectable({
  providedIn: 'root'
})
export class MicroAppsService {
  private microApps: MicroAppConfig[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.microApps = environment.microApps;
  }

  load() {
    this.microApps.forEach(app => {
      const script = document.createElement("script");
      script.src = app.url;
      this.document.body.appendChild(script);
    });
  }

  renderAll(containerId: string) {
    this.microApps.forEach(app => {
      if (app.autoRender) {
        const microApp = document.createElement(app.tagName);
        this.document.getElementById(containerId)?.appendChild(microApp);
      }
    });
  }
}
