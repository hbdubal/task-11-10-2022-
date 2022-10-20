import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from '../company/company.model';
import { CompanyService } from './company.service';

@Injectable()
export class CompanyResolverService implements Resolve<Company> {

  constructor(private companyService:CompanyService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Company | Observable<Company> {
    const id = route.params['id'];
    return this.companyService.getDataById(id)
  }

}
