import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  public companyForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private companyService:CompanyService, private router:Router) {
    this.companyForm = new FormGroup('');
  }
  //Multiselected Drowpdown List
  tags = [
    {id: 1, name: 'Laravel'},
    {id: 2, name: 'Codeigniter'},
    {id: 3, name: 'React'},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'},
    {id: 7, name: 'JQuery'},
    {id: 8, name: 'Javascript'},
  ];
    
//  Form Validation Method 
  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyName: ['', [Validators.required]],
      companyDescription: ['', [Validators.required]],
      companyTags:['', [Validators.required]]
    })
  }

  //  Submit And Post Data On Button Click Event 
  submit() {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      this.companyForm.value;
      console.log(this.companyForm.value);
    }
  }

  //  Reset Data On Button Click Event 
  onReset() {
    this.companyForm.reset();
  }
}




