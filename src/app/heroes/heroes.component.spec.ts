import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroesComponent } from './heroes.component';
import { HeroFilterComponent } from './hero-filter/hero-filter.component';
import { Hero } from '../hero/hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    class RouterStub {
      navigateByUrl(url: string) { return url; }
    }

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([
          {
            path: `detail/:id`,
            redirectTo: '',
          }
        ]),
      ],
      declarations: [HeroesComponent, HeroFilterComponent],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('heroes array should be updated on ngOnInit', () => {
    expect(component.heroes.length).toBeGreaterThan(0);
  });

  describe('onHeroClick', () => {
    it(
      'should call router navigation with provided hero id',
      inject([Router],
      (router: Router) => {
        const spy = spyOn(router, 'navigateByUrl');
        const mockHero = new Hero();
        mockHero.id = 1;

        component.onHeroClick(mockHero);

        // const call = spy.calls.first().args[0];;
        // expect(call).toBe('/detail/1');
        expect(spy).toHaveBeenCalledWith('/detail/1');
    }));

    it(
      'should not call router navigation if no hero id provided',
      inject([Router],
      (router: Router) => {
        const spy = spyOn(router, 'navigateByUrl');
        const mockHero = new Hero();

        component.onHeroClick(mockHero);

        expect(spy).not.toHaveBeenCalled();
      }));
  });


  describe('getHeroColor', () => {
    it('should return empty when no hero was provided', () => {
      const mockHero = new Hero;
      const colorResult = component.getHeroColor(mockHero);
      expect(colorResult).toEqual({ color: '' });
    });

    it('should return blue when good alignment Hero was provided', () => {
      const mockHero = new Hero();
      mockHero.alignment = 'good';
      const colorResult = component.getHeroColor(mockHero);
      expect(colorResult).toEqual({ color: 'blue' });
    });

    it('should return red when evil alignment Hero was provided', () => {
      const mockHero = new Hero();
      mockHero.alignment = 'evil';
      const colorResult = component.getHeroColor(mockHero);
      expect(colorResult).toEqual({ color: 'red' });
    });

    it('should return gray when neutral alignment Hero was provided', () => {
      const mockHero = new Hero();
      mockHero.alignment = 'neutral';
      const colorResult = component.getHeroColor(mockHero);
      expect(colorResult).toEqual({ color: 'gray' });
    });
  });

});
