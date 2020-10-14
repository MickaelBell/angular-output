import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComPageComponent } from './com-page.component';

describe('ComPageComponent', () => {
  let component: ComPageComponent;
  let fixture: ComponentFixture<ComPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
