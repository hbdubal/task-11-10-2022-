import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {

  transform(value: string): string {
    value=value.toUpperCase();
    let name = "";
    if(value.indexOf(' ')>=0)
    {
      const names = value.split(' ');
      name = `${names[0].charAt(0)}${names[1].charAt(0)}`;
    }
    else{
      name = value.substring(0,2)
    }
    return name;
   }

}
