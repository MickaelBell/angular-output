import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComListComponent } from './com-list.component';

describe('ComListComponent', () => {
  let component: ComListComponent;
  let fixture: ComponentFixture<ComListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
