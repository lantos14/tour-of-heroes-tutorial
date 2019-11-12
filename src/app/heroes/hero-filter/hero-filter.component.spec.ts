import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroFilterComponent } from './hero-filter.component';
import { HeroService } from 'src/app/services/hero/hero.service';

describe('HeroFilterComponent', () => {
  let component: HeroFilterComponent;
  let fixture: ComponentFixture<HeroFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ HeroFilterComponent ],
      providers: [
        { 
          provide: HeroService,
          useClass: class {
            changeFilterLvl = jasmine.createSpy("changeFilterLvl");
            changeFilterAlignment = jasmine.createSpy("changeFilterAlignment");
            changeMovieFilter = jasmine.createSpy("changeMovieFilter");
         }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('properties should receive default values', () => {
    const categories = ['-', 'good', 'neutral', 'evil'];
    const movieOptions = ['-', 'yes', 'no'];

    expect(component.category).toBe('-');
    expect(component.lvlValue).toBe(0);
    expect(component.hasMovie).toBe('-');
    expect(component.categories).toEqual(categories);
    expect(component.movieOptions).toEqual(movieOptions);
  });

  describe('methods', () => {
    it('should call change lvlValue property on HeroService', () => {
      const heroServiceStub = fixture.debugElement.injector.get(HeroService);
      const lvlValue = 10;
      component.lvlValue = lvlValue;
      component.onLvlRangeChange();

      expect(heroServiceStub.changeFilterLvl).toHaveBeenCalledWith(lvlValue);
    });

    it('should call changeFilterAlignment method on HeroService', () => {
      const heroServiceStub = fixture.debugElement.injector.get(HeroService);
      const category = 'good';
      component.category = category;
      component.onAlignmentChange();

      expect(heroServiceStub.changeFilterAlignment)
        .toHaveBeenCalledWith(category);
    });

    it('should call changeMovieFilter property on HeroService', () => {
      const heroServiceStub = fixture.debugElement.injector.get(HeroService);
      const hasMovie = 'no';
      component.hasMovie = hasMovie;
      component.onMovieChange();

      expect(heroServiceStub.changeMovieFilter).toHaveBeenCalledWith(hasMovie);
    });
  });

});
