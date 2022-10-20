import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyResolverService } from '../service/company-resolver.service';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    // Start: Children Routing Path
    children: [
      {
        path: '',
        pathMatch:'full',
        redirectTo:'add'
      },
      {
        path: 'add',
        component: CompanyFormComponent,
       
      },
      {
        path: 'edit/:id',
        component: CompanyFormComponent,
        resolve:{
          companyData:CompanyResolverService
        }
        
      }
    ]
    // End: Children Routing Path
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
