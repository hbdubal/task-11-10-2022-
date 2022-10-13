import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  company: any;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanyData()
  }

  //Get Data
  getCompanyData() {
    this.companyService.getData().subscribe((data) => {
      this.company = data;
    }
    )
  }
  
  //Post Data
  addData() {
    this.companyService.createData(this.company).subscribe(data => {
      console.log(data);
    })
  }
}
