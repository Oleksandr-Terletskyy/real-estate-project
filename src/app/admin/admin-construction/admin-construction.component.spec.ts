import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConstructionComponent } from './admin-construction.component';

describe('AdminConstructionComponent', () => {
  let component: AdminConstructionComponent;
  let fixture: ComponentFixture<AdminConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
