import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../services/hero/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) { }

  getHeroes(): void {
    this.heroService.getFilteredHeroes()
      .subscribe(
        (heroes) => {
        console.log(heroes);
        this.heroes = heroes
      },
      (err) => console.log(err),
      );
  }

  ngOnInit() {
    this.getHeroes();
  }

  onHeroClick(hero): void {
    this.router.navigateByUrl(`/detail/${hero.id}`);
  }
}
