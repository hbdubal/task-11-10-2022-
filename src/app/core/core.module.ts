import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbServiceService } from './service/breadcrumb-service.service';

@NgModule({
  declarations: [
    HeaderComponent  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ],
  providers: [BreadcrumbServiceService],
})
export class CoreModule { }

