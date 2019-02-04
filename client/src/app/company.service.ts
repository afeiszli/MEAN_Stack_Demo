import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  company: Company;

  constructor(private http: HttpClient) { }
  //get companies
  getCompanies(){
    return this.http.get<String[]>('http://localhost:3000/api/companies');
  }
  getSalaries(inputCompany){
    return this.http.get<Company>('http://localhost:3000/api/costs/' + inputCompany);
  }
}
