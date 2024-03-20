import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../../Model/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8083/department';

  constructor(private http: HttpClient) {}

  getAllDepartments(
    pageSize: number,
    currentPage: number
  ): Observable<Department[]> {
    const params = new HttpParams()
      .set('_page', currentPage.toString())
      .set('_limit', pageSize.toString());
    return this.http.get<Department[]>(
      'http://localhost:8083/department/getAll',
      { params }
    );
  }

  saveDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(
      `http://localhost:8083/department/save`,
      department
    );
  }

  updateDepartment(id: number, department: Department): Observable<Department> {
    return this.http.put<Department>(
      `http://localhost:8083/department/${id}`,
      department
    );
  }

  deleteDepartment(department: Department): Observable<void> {
    return this.http.put<void>(
      `http://localhost:8083/department/updateStatus`,
      department
    );
  }
}
