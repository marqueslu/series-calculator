import { Pipe, PipeTransform } from '@angular/core';
import { Serie } from 'src/app/core';

@Pipe({ name: 'filterByTitle' })
export class FilterByTitlePipe implements PipeTransform {
  transform(series: Serie[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLocaleLowerCase();

    if (descriptionQuery) {
      return series.filter(serie =>
        serie.title.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return series;
    }
  }
}
