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
  salary_sum: number;

  //get total salaries (set salary_sum) for the current value of company
  getSalary(){
    this.companyService.getSalaries(this.company).subscribe((res)=>{
      this.salary_sum = res[0].salary_sum;
    });
    console.log(this.salary_sum);
    this.ref.detectChanges();
  }

  //update value of companies, for use when employees are added
  updateCompanies(){
    this.companyService.getCompanies()
      .subscribe( data => this.companies = data);
      console.log(this.companies);
  }

  constructor(private companyService: CompanyService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe( data => this.companies = data);
      console.log(this.companies);
  }
}

