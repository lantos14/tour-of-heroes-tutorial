import { TestBed } from '@angular/core/testing';

import { MessageIntervalService } from './message-interval.service';

describe('MessageIntervalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageIntervalService = TestBed.get(MessageIntervalService);
    expect(service).toBeTruthy();
  });
});
