import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {
  public compUrl: string;

  constructor(private http: HttpClient) {
    this.compUrl = "http://localhost:3000/company";
  }
  
 
}
