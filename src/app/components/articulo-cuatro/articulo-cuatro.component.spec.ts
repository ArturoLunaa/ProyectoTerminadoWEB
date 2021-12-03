import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCuatroComponent } from './articulo-cuatro.component';

describe('ArticuloCuatroComponent', () => {
  let component: ArticuloCuatroComponent;
  let fixture: ComponentFixture<ArticuloCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
