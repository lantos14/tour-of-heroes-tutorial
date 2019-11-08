import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero/hero';

// this pipe adds a class to the template, but it can be used only
// with ViewEncapsulation.None on the Component, which cause the 
// class to flow out to the whole document
@Pipe({
  name: 'heroNameColorizer'
})
export class HeroNameColorizerPipe implements PipeTransform {
  transform(hero: Hero): string {
    const { name, alignment } = hero;
    let classString = '';

    if (alignment === 'good') {
      classString = 'blue';
    } else if (alignment === 'evil') {
      classString = 'red';
    } else if (alignment === 'neutral') {
      classString = 'gray';
    }

    //  return `<span class="${classString}">${name}</span>`;
    return `<span style="color: ${classString}">${name}</span>`;
  }

}
