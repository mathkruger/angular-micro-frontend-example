import { Component, OnInit } from '@angular/core';
import { MicroAppsService } from 'src/app/services/micro-apps.service';

@Component({
  selector: 'app-micro-apps-router-outlet',
  templateUrl: './micro-apps-router-outlet.component.html',
  styleUrls: ['./micro-apps-router-outlet.component.css']
})
export class MicroAppsRouterOutletComponent implements OnInit {
  containerId = "pages";

  constructor(private microAppsService: MicroAppsService) {}

  ngOnInit(): void {
    this.microAppsService.load();
    this.microAppsService.renderAll(this.containerId);
  }

}
