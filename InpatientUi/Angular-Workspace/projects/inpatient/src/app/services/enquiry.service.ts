import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  constructor(private http: HttpClient) {}

  getDetails(name: string): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8081/registration/patients/getByName/${name}`
    );
  }
}
