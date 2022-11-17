import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  microApps: any = {};
  containerId = "micro-apps";

  ngOnInit(): void {
    this.microApps = environment.microApps;

    this.loadMicroApps();
    this.addMicroAppsToView();
  }

  loadMicroApps() {
    Object.keys(this.microApps).forEach((key: string) => {
      const script = document.createElement("script");
      script.src = this.microApps[key].url;
      document.body.appendChild(script);
    });
  }

  addMicroAppsToView() {
    Object.keys(this.microApps).forEach((key: string) => {
      const microApp = document.createElement(this.microApps[key].tagName);
      document.getElementById(this.containerId)?.appendChild(microApp);
    });
  }

}
