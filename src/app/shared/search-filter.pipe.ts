import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../company/company.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(values: Company[], searchText: any): Company[] {
    if (!values || !searchText) {
      return values;
    }
    else {
      values.filter((company) => {
        return company.companyName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      });
    }
  }
}
