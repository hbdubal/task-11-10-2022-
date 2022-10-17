import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CompanyService } from '../service/company.service';
import { HttpClientModule } from '@angular/common/http';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [CompanyService]
})
export class CompanyModule { }
