import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  public companyForm: FormGroup;
  isSubmitted: boolean = false;
  public id: any;

  constructor(private fb: FormBuilder, public companyService:CompanyService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.companyForm = new FormGroup('');
    this.activatedRoute.params.subscribe((params)=>
    {
      this.id=params['id'];
    })
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
      companyTags:['', [Validators.required]],
      companyLogo:['', [Validators.required]]
    })
  }

  //  Submit And Post Data On Button Click Event 
  submit() {
    this.isSubmitted = true;
    this.companyService.createData(this.companyForm.value).subscribe(resp=>
      {
        this.router.navigate(['company']);
      }
    )
    if (this.companyForm.valid) {
      if (this.id) {
        this.updateData();
      }
      else {
	  
      }
      this.companyForm.value;
    }
  }
   //  Update Data On List Click Event 
   updateData() {
    this.companyService.updatelist(this.companyForm.value,this.id).subscribe((res)=> {
      console.log(res);
      
    });
  }
  //  Reset Data On Button Click Event 
  onReset() {
    this.companyForm.reset();
  }

  
}



