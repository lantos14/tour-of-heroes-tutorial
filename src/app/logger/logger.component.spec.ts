import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerComponent } from './logger.component';
import { MessagesComponent } from '../messages/messages.component';
import { MessagesIntervalComponent } from '../messages-interval/messages-interval.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoggerComponent', () => {
  let component: LoggerComponent;
  let fixture: ComponentFixture<LoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ 
        LoggerComponent,
        MessagesComponent,
        MessagesIntervalComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
