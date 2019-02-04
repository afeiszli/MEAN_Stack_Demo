import { Component, Input, Output, ViewChild, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CompaniesComponent } from './companies/companies.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public updateCompaniesEvent: Event;

  @ViewChild('companyChild') companyChild: CompaniesComponent;

  constructor( private ref: ChangeDetectorRef ) {}  

  childAddedEmployee(event: Event) {
    //this.updateCompaniesEvent = event;
    setTimeout(() => this.companyChild.updateCompanies(), 2000);
    setTimeout(() => this.companyChild.getSalary(), 2000);
    this.ref.detectChanges();
   console.log("Ran ChildaddedEmployee Event");
  }

}

