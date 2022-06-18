import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcworkerComponent } from './hcworker.component';

describe('HcworkerComponent', () => {
  let component: HcworkerComponent;
  let fixture: ComponentFixture<HcworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcworkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
