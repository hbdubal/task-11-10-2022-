import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../company/company.model';

@Injectable()
export class CompanyService {
  public compUrl: string;

  constructor(private http: HttpClient) {
    this.compUrl = "http://localhost:3000/company/";
  }

  // Get Data From DataBase
  getData(): Observable<Company[]> {
    return this.http.get<Company[]>(this.compUrl);
  }
  // Get Data From DataBase By Id
  getDataById(id: number): Observable<Company> {
    return this.http.get<Company>(this.compUrl + id)
  }

  // Create Data From DataBase
  createData(company: Company): Observable<Company> {
    return this.http.post<Company>(this.compUrl, company);
  }

  // Update Data From DataBase
  updatelist(id: number, company:Company): Observable<Company> {
    return this.http.put<Company>(this.compUrl + id, company)
  }

  // Delete Data From DataBase
  deleteData(id: number): Observable<Company> {
    return this.http.delete<Company>(this.compUrl + id)
  }

}
