import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameInitialsPipe } from './name-initials.pipe';

@NgModule({
  declarations: [
  NameInitialsPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NameInitialsPipe
  ]
})
export class SharedModule { }
