import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  //get employees
  getEmployees(){
    return this.http.get<Employee[]>('http://localhost:3000/api/employees');
  }

  //add employee
  addEmployee(employee){
    return this.http.post('http://localhost:3000/api/employee', employee);
  }

}
