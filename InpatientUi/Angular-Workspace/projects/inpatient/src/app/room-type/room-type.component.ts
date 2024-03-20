import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../service/utility.service';
@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrl: './room-type.component.css',
})
export class RoomTypeComponent {
  constructor(private router: Router, private utilityService: UtilityService) {}

  public isLoggedIn: boolean = true;
  public user: any = null;

  isLogged(): boolean {
    this.isLoggedIn = this.utilityService.isLogged();
    if (this.isLoggedIn) {
      this.user = this.utilityService.getUser();
      return this.isLoggedIn;
    }
    return this.isLoggedIn;
  }

  logout() {
    this.utilityService.logout();
    this.router.navigate(['/login']);
  }
}
