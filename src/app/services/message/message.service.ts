import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  leftyMessages: string[] = [];
  rigthyMessages: string[] = [];
  constructor() { }

  // left column logger methods
  addLeftyMsg(message: string): void {
    this.leftyMessages.push(message);
  }

  getStream1Length() {
    return this.leftyMessages.length + 1;
  }

  getStream2Length() {
    return this.rigthyMessages.length + 1;
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
