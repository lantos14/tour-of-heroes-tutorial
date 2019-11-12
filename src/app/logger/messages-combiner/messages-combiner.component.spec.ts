import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesCombinerComponent } from './messages-combiner.component';

describe('MessagesCombinerComponent', () => {
  let component: MessagesCombinerComponent;
  let fixture: ComponentFixture<MessagesCombinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesCombinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesCombinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
