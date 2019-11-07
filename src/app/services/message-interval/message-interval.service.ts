import { Injectable } from '@angular/core';
import { timer, fromEvent, interval } from 'rxjs';
import { map, exhaustMap, delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageIntervalService {
  messages: string[] = [];

  constructor() { }

  add(message: any) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

