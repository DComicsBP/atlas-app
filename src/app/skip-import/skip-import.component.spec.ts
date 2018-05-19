import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipImportComponent } from './skip-import.component';

describe('SkipImportComponent', () => {
  let component: SkipImportComponent;
  let fixture: ComponentFixture<SkipImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
