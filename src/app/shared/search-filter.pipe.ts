import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../company/company.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(values: Company[], searchText: string) {
    if (values.length === 0 || searchText === '') {
      return values;
    }
    else {
      return values.filter((company) => {
        return company.companyName?.toLowerCase() === searchText.toLowerCase()
      })
    }
  }
}
