import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroFilterComponent } from './heroes/hero-filter/hero-filter.component';
import { MessagesLeftyComponent } from './messages-lefty/messages-lefty.component';
import { MessagesRighty } from './messages-righty/messages-righty.component';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { HeroNameColorizerPipe } from './pipes/hero-name-colorizer.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroFilterComponent,
        MessagesLeftyComponent,
        MessagesRighty,
        HeroNameColorizerPipe,
        SafeHtmlPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });

  it(`should have an h1 tag with text 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('h1').textContent).toEqual('Tour of Heroes');
  });

  it(`should render nav element`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    expect(app.querySelectorAll("nav a").length).toBe(3);
  });
});


