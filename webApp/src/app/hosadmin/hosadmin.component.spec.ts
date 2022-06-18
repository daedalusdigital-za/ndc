import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosadminComponent } from './hosadmin.component';

describe('HosadminComponent', () => {
  let component: HosadminComponent;
  let fixture: ComponentFixture<HosadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
