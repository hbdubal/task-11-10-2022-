import { Component, OnInit } from '@angular/core';
import { BreadcrumbServiceService } from '../../service/breadcrumb-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public breadcrumbName:string;
  constructor(private breadcrumbService:BreadcrumbServiceService) {
    this.breadcrumbName='';
    this.breadcrumbService.breadcrumb.subscribe((data:string)=>
      {
        this.breadcrumbName=data;
      })
   }

  ngOnInit(): void {

  }

}
