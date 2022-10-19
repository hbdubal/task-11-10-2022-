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
  company: any;

  constructor(private fb: FormBuilder, public companyService: CompanyService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.companyForm = new FormGroup('');
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];

      if (this.id) {
        this.getCompanybyId();
      }
    })
  }
  //Multiselected Drowpdown List
  tags = [
    { id: 1, name: 'Laravel' },
    { id: 2, name: 'Codeigniter' },
    { id: 3, name: 'React' },
    { id: 4, name: 'PHP' },
    { id: 5, name: 'Angular' },
    { id: 6, name: 'Vue' },
    { id: 7, name: 'JQuery' },
    { id: 8, name: 'Javascript' },
  ];

  //  Form Validation Method 
  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyName: ['', [Validators.required]],
      companyDescription: ['', [Validators.required]],
      companyTags: ['', [Validators.required]],
      companyLogo: ['']
    })
  }

  //  Submit And Post Data On Button Click Event 
  submit() {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      if (this.id) {
        this.onUpdate();
      }
      else {
        this.companyService.createData(this.companyForm.value).subscribe(resp => {
          this.router.navigate(['company']);
        })
      }
    }
  }

  //  Update and edit data
  onUpdate() {
    this.companyService.updatelist(this.id, this.companyForm.value).subscribe((data => {
      this.router.navigate(['company']);
    }))
  }
  getCompanybyId() {
    this.companyService.getDataById(this.id).subscribe((data) => {
      this.companyForm.patchValue(data);
    })
  }
  //  Reset Data On Button Click Event 
  onReset() {
    this.companyForm.reset();
  }
}



