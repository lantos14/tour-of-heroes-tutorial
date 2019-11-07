import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, combineLatest } from 'rxjs';
import { Hero } from '../../hero/hero';
import { HEROES } from '../../hero/hero-list';
import { MessageService } from '../message/message.service';
import { filter, map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  lvl:BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getFilteredHeroes(): Observable<Hero[]> {
    return combineLatest(
      this.getHeroes(),
      this.lvl,
      ).pipe(
        map(([heros, lvl]) => heros.filter(hero => hero.powerLevel >= lvl)),
        catchError(err => {
          console.log("*******",err);
          return of([{}as Hero]);
        })
      )
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched Hero id: ${id}`);
    return of(HEROES.find(hero => hero.id === id))
  }

  changeFilterLvl(value: number) {
    this.lvl.next(value);
  }

  constructor(
    private messageService: MessageService
  ) { }
}
