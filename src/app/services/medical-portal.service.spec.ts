import { TestBed } from '@angular/core/testing';

import { MedicalPortalService } from './medical-portal.service';

describe('MedicalPortalService', () => {
  let service: MedicalPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
