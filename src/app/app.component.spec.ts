import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroFilterComponent } from './heroes/hero-filter/hero-filter.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesIntervalComponent } from './messages-interval/messages-interval.component';
import {
  HttpClientTestingModule,
  HttpTestingController
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
        MessagesComponent,
        MessagesIntervalComponent,
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

  it(`should have as title 'tour-of-heroes-ng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tour-of-heroes-ng');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('tour-of-heroes-ng app is running!');
  });
});
