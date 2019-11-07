import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.css']
})
export class HeroFilterComponent {
  categories: string[] = ['-', 'good', 'neutral', 'evil'];
  @Input() category = '-';
  @Input() lvlValue = 0;
  @Input() hasMovie = false;
  constructor(
    private heroService: HeroService,
  ) { }

  onLvlRangeChange() {
    this.heroService.changeFilterLvl(this.lvlValue);
  }

  onAlignmentChange() {
    this.heroService.changeFilterAlignment(this.category);
  }

  onMovieChange() {
    this.hasMovie = !this.hasMovie;
    this.heroService.changeMovieFilter(this.hasMovie);
  }
}
