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

  @Output() employeeAddedEvent = new EventEmitter<Event>();

  employees: Employee[];
  employee: Employee;

  first_name:string;
  last_name:string;
  address:string;
  company:string;
  salary:number;

  constructor(private http: HttpClient, private employeeService: EmployeeService) { }

  addEmployee(value: any){
    this.first_name=value.first_name;
    this.last_name=value.last_name;
    this.address=value.address;
    this.company=value.company;
    this.salary=value.salary;

    var newEmployee ={
      first_name:this.first_name,
      last_name:this.last_name,
      address:this.address,
      company:this.company,
      salary:this.salary	
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
