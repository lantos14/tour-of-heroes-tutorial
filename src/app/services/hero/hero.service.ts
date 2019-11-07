import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, combineLatest } from 'rxjs';
import { Hero } from '../../hero/hero';
import { HEROES } from '../../hero/hero-list';
import { MessageService } from '../message/message.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  lvl: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  alignment: BehaviorSubject<string> = new BehaviorSubject<string>('-');
  constructor() { }
  hasMovie: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

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
      map(([heros, lvl, alignment, movie]) =>
        heros.filter(hero => this.filterer(hero, lvl, alignment, movie)),
      )
    )
  }

  filterer(
    hero: Hero,
    lvl: number,
    alignment: string,
    movie: boolean,
  ): boolean {
    let result = true;
    if (alignment == '-') {
      result = hero.powerLevel >= lvl
    } else {
      result = hero.powerLevel >= lvl && hero.alignment == alignment
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
}
