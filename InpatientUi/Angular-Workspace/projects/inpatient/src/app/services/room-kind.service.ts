import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomType } from '../../Model/roomkind.model';

@Injectable({
  providedIn: 'root'
})
export class RoomKindService {

  private apiUrl = 'http://localhost:8083/roomType';

  constructor(private http: HttpClient) {}

  getAllRoomTypes(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8083/roomType/getAll`);
}

  saveRoomType(roomType : RoomType ): Observable<RoomType> {
    return this.http.post<RoomType>(`http://localhost:8083/roomType/save`, roomType);
  }

  updateRoomType(id: number, roomType: RoomType ): Observable<RoomType> {
    return this.http.put<RoomType>(`http://localhost:8083/roomType/update`, roomType);
  }

  deleteRoomType(roomType: RoomType): Observable<void> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<void>(`http://localhost:8083/roomType/status`,roomType,{headers});
  }
}