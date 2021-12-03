import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloTresComponent } from './articulo-tres.component';

describe('ArticuloTresComponent', () => {
  let component: ArticuloTresComponent;
  let fixture: ComponentFixture<ArticuloTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
