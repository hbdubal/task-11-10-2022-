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

  // Create Data From DataBase
  createData(company:Company):Observable<Company>
  {
    return this.http.post<Company>(this.compUrl, company);
  }

  // Update Data From DataBase
  updatelist(employee: Company, id: number): Observable<Company> {
    return this.http.put<Company>(this.compUrl + id, Company)
  }

   // Delete Data From DataBase
   deleteData(id: number): Observable<Company> {
    return this.http.delete<Company>(this.compUrl +id)
  }
  
}
