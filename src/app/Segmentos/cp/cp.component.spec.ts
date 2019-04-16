import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPComponent } from './cp.component';

describe('CPComponent', () => {
  let component: CPComponent;
  let fixture: ComponentFixture<CPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
