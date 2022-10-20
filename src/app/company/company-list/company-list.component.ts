import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbServiceService } from 'src/app/core/service/breadcrumb-service.service';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from '../company.model';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public company: any;
  public searchText: string = '';
  public listCompanyData: Company[]=[];
  constructor(private companyService: CompanyService, private router: Router, private breadcrumbService: BreadcrumbServiceService) {
    this.company = [];
  }

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
    })
  }

  //Update Data
  onEditList(id: number) {
    this.router.navigate(['company/edit', id])
    this.breadcrumbService.breadcrumb.next('Edit');
  }

  //Delete Data
  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this?')) {
      this.companyService.deleteData(id).subscribe(resp => {
        this.getCompanyData();
      })
    }
    else {
      this.router.navigate(['company/add']);
    }
  }

  //Form onclick Event
  onAdd() {
    this.router.navigate(['company/add']);
    this.breadcrumbService.breadcrumb.next('Add');
  }

  
  
}

