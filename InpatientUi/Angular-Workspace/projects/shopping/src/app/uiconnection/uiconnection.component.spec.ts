import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiconnectionComponent } from './uiconnection.component';

describe('UiconnectionComponent', () => {
  let component: UiconnectionComponent;
  let fixture: ComponentFixture<UiconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiconnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
