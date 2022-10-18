import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameInitialsPipe } from './name-initials.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
  NameInitialsPipe,
  SearchFilterPipe,
  BreadcrumbComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    NameInitialsPipe,
    SearchFilterPipe,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
