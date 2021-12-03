import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCincoComponent } from './articulo-cinco.component';

describe('ArticuloCincoComponent', () => {
  let component: ArticuloCincoComponent;
  let fixture: ComponentFixture<ArticuloCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
