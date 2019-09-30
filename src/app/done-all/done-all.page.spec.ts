import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneAllPage } from './done-all.page';

describe('DoneAllPage', () => {
  let component: DoneAllPage;
  let fixture: ComponentFixture<DoneAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneAllPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
