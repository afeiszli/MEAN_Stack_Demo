import { Component, Input, Output, ViewChild, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CompaniesComponent } from './companies/companies.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //get CompaniesComponent instance to update when an employee is added
  @ViewChild('companyChild') companyChild: CompaniesComponent;

  constructor( private ref: ChangeDetectorRef ) {}  

  //Update CompaniesComponent on add of employee in EmployeesComponent
  childAddedEmployee(event: Event) {
    setTimeout(() => this.companyChild.updateCompanies(), 2000);
    setTimeout(() => this.companyChild.getSalary(), 2000);
    this.ref.detectChanges();
  }

}

