import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixregisterComponent } from './netflixregister.component';

describe('NetflixregisterComponent', () => {
  let component: NetflixregisterComponent;
  let fixture: ComponentFixture<NetflixregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetflixregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetflixregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
