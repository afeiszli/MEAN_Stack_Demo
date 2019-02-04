import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompanyService]
})
export class CompaniesComponent implements OnInit {
  companies: String[];
  company: string;
  selectedCompany: Company;               
  salary_sum: number;

  @Input()
  updateEvent(){
    this.companyService.getCompanies();
    this.getSalary();
    console.log("Ran UpdateEvent")
  }

  getSalary(){
    this.companyService.getSalaries(this.company).subscribe((res)=>{
      this.salary_sum = res[0].salary_sum;
    });
    console.log(this.salary_sum);
    this.ref.detectChanges();
  }

  updateCompanies(){
    this.companyService.getCompanies()
      .subscribe( data => this.companies = data);
      console.log(this.companies);
  }
  
  update(){
    this.updateCompanies();
    this.getSalary();
    this.ref.detectChanges();
  }

  getSalaries(company){
    this.companyService.getSalaries(company).subscribe((res)=>{
      //this.selectedCompany = res;
      this.salary_sum = res[0].salary_sum;
    });
  }
  constructor(private companyService: CompanyService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe( data => this.companies = data);
      console.log(this.companies);
  }
}

