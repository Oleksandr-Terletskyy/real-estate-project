import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorTwoComponent } from './floor-two.component';

describe('FloorTwoComponent', () => {
  let component: FloorTwoComponent;
  let fixture: ComponentFixture<FloorTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
