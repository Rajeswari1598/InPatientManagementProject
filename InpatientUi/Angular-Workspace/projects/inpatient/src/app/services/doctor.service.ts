import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../../Model/doctor.model';
import { Department } from '../../Model/department.model';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8081/registration/doctor';

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(
      'http://localhost:8083/department/getAll'
    );
  }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/getAll`);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiUrl}/save`, doctor);
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/update`, doctor);
  }

  deleteDoctor(doctor: Doctor): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/updateStatus`, doctor);
  }

  getPatients(name: String): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8081/registration/patients/getByDoctor/${name}`
    );
  }

  getDetails(): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8081/registration/doctor/getAllWithDept`
    );
  }
  getRegistrationsByDoctor(
    name: string,
    page: number,
    pageSize: number
  ): Observable<any[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any[]>(
      `http://localhost:8085/registration/getByDoctor/${name}`,
      { params }
    );
  }
}
