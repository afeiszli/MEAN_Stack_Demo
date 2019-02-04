import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  //let parent know when an employee is added
  @Output() employeeAddedEvent = new EventEmitter<Event>();

  employees: Employee[];
  employee: Employee;

  first_name:string;
  last_name:string;
  address:string;
  company:string;
  salary:number;

  constructor(private http: HttpClient, private employeeService: EmployeeService) { }

  //add an employee to the DB and notify the parent so it can update CompaniesComponent
  addEmployee(value: any){

    var newEmployee ={
      first_name:value.first_name,
      last_name:value.last_name,
      address:value.address,
      company:value.company,
      salary:value.salary	
    }

    this.employeeService.addEmployee(newEmployee).subscribe((res)=>{
      this.employees.push(res);
      console.log(res);
      this.employeeAddedEvent.emit(event);
    });
  }
  
  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe( data =>
      this.employees = data );
  }
}
