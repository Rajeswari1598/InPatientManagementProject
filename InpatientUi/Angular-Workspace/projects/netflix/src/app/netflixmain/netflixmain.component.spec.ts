import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixmainComponent } from './netflixmain.component';

describe('NetflixmainComponent', () => {
  let component: NetflixmainComponent;
  let fixture: ComponentFixture<NetflixmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetflixmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetflixmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
