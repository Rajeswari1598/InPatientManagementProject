import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRouComponent } from './products-rou.component';

describe('ProductsRouComponent', () => {
  let component: ProductsRouComponent;
  let fixture: ComponentFixture<ProductsRouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsRouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsRouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
