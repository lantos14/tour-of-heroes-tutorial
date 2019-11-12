import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesLeftyComponent } from './messages-lefty/messages-lefty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFilterComponent } from './heroes/hero-filter/hero-filter.component';
import { MessagesRighty } from './messages-righty/messages-righty.component';
import { HeroNameColorizerPipe } from './pipes/hero-name-colorizer.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { LoggerComponent } from './logger/logger.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'logger', component: LoggerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroFilterComponent,
    MessagesLeftyComponent,
    MessagesRighty,
    HeroNameColorizerPipe,
    SafeHtmlPipe,
    LoggerComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    MessagesLeftyComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
