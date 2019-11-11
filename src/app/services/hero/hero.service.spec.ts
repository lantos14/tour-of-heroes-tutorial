import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import Filters from 'src/app/hero/filter';
import { Hero } from 'src/app/hero/hero';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  it('properties should get default values', done => {
    const service: HeroService = TestBed.get(HeroService);

    service.lvl.subscribe(lvl => {
      expect(lvl).toBe(0);
      done();
    });

    service.alignment.subscribe(alignment => {
      expect(alignment).toBe('-');
      done();
    });

    service.hasMovie.subscribe(hasMovie => {
      expect(hasMovie).toBe('-');
      done();
    });
  });

  it('getHeroes method should return heroes array', done => {
    const service: HeroService = TestBed.get(HeroService);
    
    service.getHeroes().subscribe(array => {
      expect(array).toEqual(jasmine.any(Array));
      done();
    });
  });

  describe('getFilteredHeroes', () => {
    it('should return an array', done => {
      const service: HeroService = TestBed.get(HeroService);
      
      service.getFilteredHeroes().subscribe(result => {
        expect(result).toEqual(jasmine.any(Array));
        done();
      });

    });
  });

  describe('filterer method', () => {
    it('should return an array', done => {
      const service: HeroService = TestBed.get(HeroService);
      const heroes = [];
      const filters = new Filters;
      const result = service.filterer(heroes, filters);

      expect(result).toEqual(jasmine.any(Array));
      done();
    });

    it('should filter powerLevel accordingly', done => {
      const service: HeroService = TestBed.get(HeroService);
      const heroes: Hero[] = [
        {id: 1, name: 'Testman', powerLevel: 10, alignment: 'good', hasOwnMovie: 'yes'},
        {id: 2, name: 'JasmineGirl', powerLevel: 100, alignment: 'neutral', hasOwnMovie: 'no'},
        {id: 3, name: 'SuperBug', powerLevel: 200, alignment: 'evil', hasOwnMovie: 'no'},
      ];

      const filters = new Filters;
      filters.lvl = 50;

      const result = service.filterer(heroes, filters);

      expect(result.length).toBe(2);
      expect(result[0].name).toBe('JasmineGirl');
      expect(result[1].name).toBe('SuperBug');
      done();
    });

    it('should filter alignment accordingly', done => {
      const service: HeroService = TestBed.get(HeroService);
      const heroes: Hero[] = [
        {id: 1, name: 'Testman', powerLevel: 10, alignment: 'good', hasOwnMovie: 'yes'},
        {id: 2, name: 'JasmineGirl', powerLevel: 100, alignment: 'neutral', hasOwnMovie: 'no'},
        {id: 3, name: 'SuperBug', powerLevel: 200, alignment: 'evil', hasOwnMovie: 'no'},
      ];

      const filters = new Filters;
      filters.alignment = 'neutral';

      const result = service.filterer(heroes, filters);

      expect(result.length).toBe(1);
      expect(result[0].name).toBe('JasmineGirl');
      done();
    });

    it('should filter movie accordingly', done => {
      const service: HeroService = TestBed.get(HeroService);
      const heroes: Hero[] = [
        {id: 1, name: 'Testman', powerLevel: 10, alignment: 'good', hasOwnMovie: 'yes'},
        {id: 2, name: 'JasmineGirl', powerLevel: 100, alignment: 'neutral', hasOwnMovie: 'no'},
        {id: 3, name: 'SuperBug', powerLevel: 200, alignment: 'evil', hasOwnMovie: 'no'},
      ];

      const filters = new Filters;
      filters.movie = 'yes';

      const result = service.filterer(heroes, filters);

      expect(result.length).toBe(1);
      expect(result[0].name).toBe('Testman');
      done();
    });
  });
});
