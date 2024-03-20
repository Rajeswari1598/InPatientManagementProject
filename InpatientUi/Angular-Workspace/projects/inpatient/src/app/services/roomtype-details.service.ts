import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PatientBillingEntity } from '../../Model/billing.model';
import { BillingDto } from '../../Model/billingDto';

@Injectable({
  providedIn: 'root'
})
export class RoomtypeDetailsService {
  constructor(private http:HttpClient) { }
   registrationDetails(data:any):Observable<any>
  {
    const headers = { 'Content-Type': 'application/json' };
  
    return this.http.post<PatientBillingEntity>('http://localhost:8083/register/save',data,{headers}).pipe(tap(data=>JSON.stringify("Registrationservice"+data)))
  }

  getAllDetails(pageSize:number,currentPage:number):Observable<BillingDto[]>
  {
    const params = new HttpParams()
        .set('_page', currentPage.toString())
        .set('_limit', pageSize.toString());
  
  
  
    return this.http.get<BillingDto[]>('http://localhost:8082/billing/get',{params})
  }
  private filterurl = 'http://localhost:8082/billing/filter'; 


  filterDataByDateRange(pageSize:number,currentPage:number,startDate: string, endDate?: string): Observable<BillingDto[]> {
    const params = new HttpParams()
      .set('_page', currentPage.toString())
      .set('_limit', pageSize.toString());
    endDate = endDate || new Date().toISOString().split('T')[0];

    const url = `${this.filterurl}?startDate=${startDate}&endDate=${endDate || ''}`;
    return this.http.get<BillingDto[]>(url,{params});
  }
saveBillingdetails(details:PatientBillingEntity):Observable<PatientBillingEntity>
{
  const headers = { 'Content-Type': 'application/json' };

  return this.http.post<PatientBillingEntity>('http://localhost:8082/billing/save',details,{headers}).pipe(tap(data=>JSON.stringify(data)))
}
storeBillingDetails(data:any):Observable<any[]>
{
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.put<any[]>('http://localhost:8082/billing/update',data,{headers});

}
billingDetailsById(billId:any[]):Observable<any[]>
{
  return this.http.get<any[]>(`http://localhost:8082/billing/fetch/${billId}`)
}
loginDetails(data:any):Observable<any>
{
  const headers = { 'Content-Type': 'application/json' };
  return this.http.post<any[]>('http://localhost:8083/register/login',data,{headers}).pipe(tap(data=>JSON.stringify("login"+data)))
}
verifyOtp(email:string,enteredOtp:string):Observable<any[]>
{
  const params = new HttpParams()
      .set('email', email)
      .set('enteredOtp', enteredOtp);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post<any[]>(`http://localhost:8083/register/verify`, null, { headers, params });
  }
sendOtp(email: string): Observable<any[]> {
  return this.http.get<any>(`http://localhost:8083/register/generateOtp?email=${email}`);

}
password(email:string,password:string)
{
  const params = new HttpParams()
      .set('email', email)
      .set('password', password);
  return this.http.put<any>(`http://localhost:8083/register/password`,{},{params});
}
getNumber(patientNumber:string): Observable<any> {
  const params = new HttpParams()
    .set('patientNumber', patientNumber);

   const headers = { 'Content-Type': 'application/json' };
    

  return this.http.get<any>(`http://localhost:8082/billing/getno?patientNumber=${patientNumber}`)

}
}

