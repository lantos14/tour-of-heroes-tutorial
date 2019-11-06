import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../hero/hero';
import { HEROES } from '../../hero/hero-list';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched Hero id: ${id}`);
    return of (HEROES.find(hero => hero.id === id))
  }
  constructor(
    private messageService: MessageService
  ) { }
}
