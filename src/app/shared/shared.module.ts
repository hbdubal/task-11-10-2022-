import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameInitialsPipe } from './name-initials.pipe';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
  NameInitialsPipe,
  SearchFilterPipe,
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NameInitialsPipe,
    SearchFilterPipe
  ]
})
export class SharedModule { }
