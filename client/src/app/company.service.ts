import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  //get list of all companies
  getCompanies(){
    return this.http.get<String[]>('http://localhost:3000/api/companies');
  }

  //get salaries for the given company
  getSalaries(inputCompany){
    return this.http.get<Company>('http://localhost:3000/api/costs/' + inputCompany);
  }
}
