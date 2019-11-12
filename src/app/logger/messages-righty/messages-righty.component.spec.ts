import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesRighty } from './messages-righty.component';

describe('MessagesIntervalComponent', () => {
  let component: MessagesRighty;
  let fixture: ComponentFixture<MessagesRighty>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesRighty ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesRighty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
