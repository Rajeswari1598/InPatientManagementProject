import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../Model/department.model';
import { RoomType } from '../../Model/roomkind.model';
import { Ward } from '../../Model/ward.model';

@Injectable({
  providedIn: 'root',
})
export class RoomRegisterService {
  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) {}

  getDetails(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/department/getAll`);
  }

  getWardNames(medicationId: number): Observable<Ward[]> {
    return this.http.get<Ward[]>(
      `${this.apiUrl}/ward/getByDepartmentId/${medicationId}`
    );
  }

  getRoomTypeNames(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(`${this.apiUrl}/roomType/getAll`);
  }
  getRoomNumbers(selectedWardId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/room/getByWardId/${selectedWardId}`
    );
  }
  getBedNumbers(roomId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bed/getByRoomId/${roomId}`);
  }
  getDetailsOfAllocation(patientNumber: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/bedAllocation/getByPatientNumber/${patientNumber}`
    );
  }

  updateBedAllocation(bedAllocation: any) {
    return this.http.put<any[]>(
      `${this.apiUrl}/bedAllocation/update`,
      bedAllocation
    );
  }
}
