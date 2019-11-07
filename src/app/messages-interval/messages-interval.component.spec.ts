import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesIntervalComponent } from './messages-interval.component';

describe('MessagesIntervalComponent', () => {
  let component: MessagesIntervalComponent;
  let fixture: ComponentFixture<MessagesIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
