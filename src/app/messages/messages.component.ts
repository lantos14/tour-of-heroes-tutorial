import { Component } from '@angular/core';
import { MessageService } from '../services/message/message.service';
import { HttpService } from '../services/http/http-service';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  source = interval(2000).pipe(
    switchMap(n => this.httpService.fetchData())
  )
  sourceSubscription;

  constructor(
    public messageService: MessageService,
    public httpService: HttpService,
  ) { }

  getWordStream() {
    this.messageService.addLeftyMsg('stream 1 has started');
    this.sourceSubscription = this.source.subscribe(
      (res) => {
        this.messageService.addLeftyMsg(`${this.messageService.getStream1Length()}. ${res}`)
      },
      (err) =>console.log('subscribe error: ', err)
    )
  }

  stopWordStream() {
    this.sourceSubscription.unsubscribe();
    this.messageService.addLeftyMsg('stream 1 has stopped');
  }
}
