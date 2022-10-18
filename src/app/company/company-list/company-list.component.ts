import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public company: any;
  public searchText: string = '';

  @Output() companyListPatch: EventEmitter<string>
  constructor(private companyService: CompanyService, private router: Router) {
    this.companyListPatch = new EventEmitter<string>;
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
      console.log(data);
    })
  }

  //Update Data
  onEditList(company: any) {
    this.router.navigate(['company/edit', company.id])
    this.companyListPatch.emit(company)
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
  }


}
