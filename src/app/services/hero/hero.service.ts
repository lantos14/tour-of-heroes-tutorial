import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, combineLatest } from 'rxjs';
import { Hero } from '../../hero/hero';
import { HEROES } from '../../hero/hero-list';
import { MessageService } from '../message/message.service';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  lvl: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  alignment: BehaviorSubject<string> = new BehaviorSubject<string>('-');
  hasMovie: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
    filters: any,
  ): Hero[] {
    let result = heroes;

    result = result.filter(hero => hero.powerLevel >= filters.lvl);

    if (filters.alignment != '-') {
      result = result.filter(hero => hero.alignment === filters.alignment);
    }

    result = result.filter(hero => hero.hasOwnMovie === filters.movie);

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

  changeMovieFilter(value: boolean): void {
    this.hasMovie.next(value);
  }
}
