import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../company/company.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(values: Company[], searchText: any): any {
    if (!values) return null;
    if (!searchText) return values;

    searchText = searchText.toLowerCase();

    return values.filter((company) => {
      return JSON.stringify(company).toLowerCase().includes(searchText);
    });
  }
}
