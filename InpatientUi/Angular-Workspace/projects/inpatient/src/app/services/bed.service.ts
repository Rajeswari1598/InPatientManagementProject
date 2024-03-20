import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bed } from '../../Model/bed.model';
import { Room } from '../../Model/room.model';
@Injectable({
  providedIn: 'root',
})
export class BedService {
  private apiUrl = 'http://localhost:8083/bed';

  constructor(private http: HttpClient) {}

  getAllBeds(): Observable<Bed[]> {
    return this.http.get<Bed[]>(`${this.apiUrl}/getAll`);
  }

  saveBed(bed: Bed): Observable<Bed> {
    console.log(bed);
    return this.http.post<Bed>(`${this.apiUrl}/save`, bed);
  }

  updateBed(id: number, bed: Bed): Observable<Bed> {
    return this.http.put<Bed>(`${this.apiUrl}/update/${id}`, bed);
  }

  deleteBed(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteById/${id}`);
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:8083/room/getAll');
  }
}
