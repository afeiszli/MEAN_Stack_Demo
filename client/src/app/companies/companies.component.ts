import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompanyService]
})
export class CompaniesComponent implements OnInit {
//  companies: Company[];
  companies: String[];
  company: Company;
               
  name: string;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe( data => this.companies = data);
//      .subscribe(data => console.log('CAN YOU HEAR ME???' + data));
      console.log(this.companies);
  }
}

