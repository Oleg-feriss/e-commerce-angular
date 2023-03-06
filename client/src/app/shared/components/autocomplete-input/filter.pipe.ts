import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
  transform(values: string[], search: string): string[] {
    if (!search) {
      return values;
    }

    return values.filter((value: string) =>
      value.toLowerCase().includes(search.toLowerCase())
    );
  }
}
