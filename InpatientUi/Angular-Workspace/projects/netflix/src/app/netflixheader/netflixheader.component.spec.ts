import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixheaderComponent } from './netflixheader.component';

describe('NetflixheaderComponent', () => {
  let component: NetflixheaderComponent;
  let fixture: ComponentFixture<NetflixheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetflixheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetflixheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
