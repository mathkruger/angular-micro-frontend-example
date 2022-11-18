import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MicroAppsService } from './services/micro-apps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  containerId = "micro-apps";

  constructor(private microAppsService: MicroAppsService) {}

  ngOnInit(): void {
    this.microAppsService.load();
    this.microAppsService.renderAll(this.containerId);
  }
}
