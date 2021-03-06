import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import { Hero } from '../../hero/hero';
import { HEROES } from '../../hero/hero-list';
import { map } from 'rxjs/operators';
import Filters from 'src/app/hero/filter';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  lvl: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  alignment: BehaviorSubject<string> = new BehaviorSubject<string>('-');
  hasMovie: BehaviorSubject<string> = new BehaviorSubject<string>('-');

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getFilteredHeroes(): Observable<Hero[]> {
    return combineLatest(
      this.getHeroes(),
      this.lvl,
      this.alignment,
      this.hasMovie,
    ).pipe(
      map(([heroes, lvl, alignment, movie]) =>
        this.filterer(heroes, {lvl, alignment, movie})
      )
    )
  }

  filterer(
    heroes: Hero[],
    filters: Filters,
  ): Hero[] {
    let result = heroes;

    result = result.filter(hero => hero.powerLevel >= filters.lvl);

    if (filters.alignment != '-') {
      result = result.filter(hero => hero.alignment === filters.alignment);
    }

    if (filters.movie != '-') {
      result = result.filter(hero => hero.hasOwnMovie === filters.movie);
    }

    return result;
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id))
  }

  changeFilterLvl(value: number): void {
    this.lvl.next(value);
  }

  changeFilterAlignment(value: string): void {
    this.alignment.next(value);
  }

  changeMovieFilter(value: string): void {
    this.hasMovie.next(value);
  }
}
