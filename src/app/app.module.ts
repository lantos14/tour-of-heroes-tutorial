import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFilterComponent } from './heroes/hero-filter/hero-filter.component';
import { MessagesIntervalComponent } from './messages-interval/messages-interval.component';
import { HeroNameColorizerPipe } from './pipes/hero-name-colorizer.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
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
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [
    MessagesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
