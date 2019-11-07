import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  leftyMessages: string[] = [];
  rigthyMessages: string[] = [];
  constructor() { }

  // Observables

  simpleObservable = new Observable((observer) => {
    observer.next('blabla');
    observer.complete();
  });

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
