import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorFourComponent } from './floor-four.component';

describe('FloorFourComponent', () => {
  let component: FloorFourComponent;
  let fixture: ComponentFixture<FloorFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
