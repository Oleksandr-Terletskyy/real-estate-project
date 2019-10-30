import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorOneComponent } from './floor-one.component';

describe('FloorOneComponent', () => {
  let component: FloorOneComponent;
  let fixture: ComponentFixture<FloorOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
