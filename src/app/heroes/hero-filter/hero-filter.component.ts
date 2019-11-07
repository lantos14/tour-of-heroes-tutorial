import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.css']
})
export class HeroFilterComponent implements OnInit, OnChanges {
  categories: string[] = ['-', 'good', 'neutral', 'evil'];
  @Input() category = '-';
  @Input() lvlValue = 0;
  constructor(
    private heroService: HeroService,
  ) { }

    onLvlRangeChange() {
      this.heroService.changeFilterLvl(this.lvlValue);
      console.log('lvlValue: ', this.lvlValue);
    }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

  }

}
