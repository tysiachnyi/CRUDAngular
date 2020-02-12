import { Pipe, PipeTransform } from '@angular/core';
import {AppData} from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(data: AppData[], search: string, field: string = 'title'): AppData[] {
    if (!search.trim()) {
      return data;
    }

    return data.filter(d => {
      return d[field].toLowerCase().includes(search.toLowerCase());
    });
  }

}
