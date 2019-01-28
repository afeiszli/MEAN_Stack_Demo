import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  //employees: Employee[];
  //employees: Object;
  employees: Array<Employee>;
  employee: Employee;

  first_name:string;
  last_name:string;
  address:string;
  company:string;
  salary:number;

  constructor(private http: HttpClient, private employeeService: EmployeeService) { }

  addEmployee(){
    const newEmployee ={
      first_name:this.first_name,
      last_name:this.last_name,
      address:this.address,
      company:this.company,
      salary:this.salary	
    }
 
  this.employeeService.addEmployee(newEmployee).subscribe((res)=>{
    this.employees.push(res);
//    console.log("Created an employee");
  });
 
  }
  
  ngOnInit() {
//    this.http.get('http://localhost:3000/api/employees')
//      .subscribe(data => console.log(data));
//      .subscribe( data => this.employees = data );
    this.employeeService.getEmployees()
      .subscribe( employees =>
      this.employees = employees );
 
  }

}
