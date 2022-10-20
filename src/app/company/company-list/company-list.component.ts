import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public data:any

  constructor(private companyService: CompanyService, private router: Router,private breadcrumbService:BreadcrumbServiceService, private activateRoute:ActivatedRoute) {
    this.company = [];
  }

  ngOnInit(): void {
   this.data=this.activateRoute.snapshot.data;
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
    this.breadcrumbService.breadcrumb.next('edit');
  }

  //Delete Data
  onDelete(id: number) {
    this.companyService.deleteData(id).subscribe(resp => {
      this.getCompanyData();
    })
  }

  //Form onclick Event
  onAdd() {
    this.router.navigate(['company/add']);
    this.breadcrumbService.breadcrumb.next('add');
  }
}
