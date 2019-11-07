import { Injectable } from '@angular/core';

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

