import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  leftyMessages: string[] = [];
  rigthyMessages: string[] = [];
  constructor() { }

  // ---! Observable Exercises

  // Exercise #1
  simpleObservable = new Observable((observer) => {
    observer.next('blabla');
    observer.complete();
  });

  // Exercise #2
  ofObservable = of('of Observable source');

  // Exercise #3
  // from is used for iterable objects, promises
  fromObservable = from(['one', 'two', 'three', 'four']);

  // Exercise #4


  // left column logger methods
  addLeftyMsg(message: any) {
    this.leftyMessages.push(message);
  }

  clearLefty() {
    this.leftyMessages = [];
  }

  // right column message methods
  addRightyMsg(message: any) {
    this.rigthyMessages.push(message);
  }

  clearRighty() {
    this.rigthyMessages = [];
  }
}
