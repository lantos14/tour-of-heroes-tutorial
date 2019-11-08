import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero/hero';

@Pipe({
  name: 'heroNameColorizer'
})
export class HeroNameColorizerPipe implements PipeTransform {

  transform(hero: Hero): string {
    const { name, alignment } = hero;
    let classString = '';

    if (alignment === 'good') {
      classString = 'blue';
    } else if(alignment === 'evil') {
      classString = 'red';
    } else {
      classString = 'gray';
    }
    return `<span class="${classString}">${name}</span>`;
  }

}
