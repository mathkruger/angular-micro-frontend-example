/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MicroAppsService } from './micro-apps.service';

describe('Service: MicroApps', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MicroAppsService]
    });
  });

  it('should ...', inject([MicroAppsService], (service: MicroAppsService) => {
    expect(service).toBeTruthy();
  }));
});
