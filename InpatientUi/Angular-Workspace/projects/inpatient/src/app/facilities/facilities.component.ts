import { Component, OnInit } from '@angular/core';
import { user } from '../../Model/user';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],
})
export class FacilitiesComponent implements OnInit {
  adminVisible: boolean = false;
  receptionVisible: boolean = false;
  role: string = '';
  public user: user = new user('', '', '', '', 0, '', '', 0, '');
  activeTab: string = 'department'; // Set the default active tab to 'department'

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    const user = this.utilityService.getUser();

    if (user != null) {
      this.user = user;
      this.role = this.user.serviceType;
    }
  }

  toggleAdmin() {
    this.adminVisible = !this.adminVisible;
    this.receptionVisible = false;
  }

  toggleReception() {
    this.receptionVisible = !this.receptionVisible;
    this.adminVisible = false;
  }
}
