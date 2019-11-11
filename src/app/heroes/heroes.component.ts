import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../services/hero/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    public router: Router,
  ) { }

  getHeroes(): void {
    this.heroService.getFilteredHeroes()
      .subscribe(
        (heroes) => {
          this.heroes = heroes
        },
        (err) => console.log(err),
      );
  }

  getHeroColor(hero: Hero): object {
    const { alignment } = hero;
    let color = '';

    if (alignment === 'good') {
      color = 'blue';
    } else if (alignment === 'evil') {
      color = 'red';
    } else if (alignment === 'neutral') {
      color = 'gray';
    }

    return { color };
  }

  ngOnInit() {
    this.getHeroes();
  }

  onHeroClick(hero): void {
    if (hero.id) {
      this.router.navigateByUrl(`/detail/${hero.id}`);
    }
  }
}
