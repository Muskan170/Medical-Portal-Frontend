import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencysosComponent } from './emergencysos.component';

describe('EmergencysosComponent', () => {
  let component: EmergencysosComponent;
  let fixture: ComponentFixture<EmergencysosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencysosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencysosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
