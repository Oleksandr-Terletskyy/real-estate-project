import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorThreeComponent } from './floor-three.component';

describe('FloorThreeComponent', () => {
  let component: FloorThreeComponent;
  let fixture: ComponentFixture<FloorThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
