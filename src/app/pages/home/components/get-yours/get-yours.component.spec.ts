import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetYoursComponent } from './get-yours.component';

describe('GetYoursComponent', () => {
  let component: GetYoursComponent;
  let fixture: ComponentFixture<GetYoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetYoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetYoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
