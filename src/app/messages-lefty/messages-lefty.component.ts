import { Component } from '@angular/core';
import { MessageService } from '../services/message/message.service';
import { HttpService } from '../services/http/http-service';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-messages-lefty',
  templateUrl: './messages-lefty.component.html',
  styleUrls: ['./messages-lefty.component.css']
})
export class MessagesLeftyComponent {
  source = interval(2000).pipe(
    switchMap(n => this.httpService.fetchData())
  );
  sourceSubscription;

  constructor(
    public messageService: MessageService,
    public httpService: HttpService,
  ) { }

  getWordStream() {
    this.sourceSubscription = this.source.subscribe(
      (res) => {
        this.messageService.addLeftyMsg(`${this.messageService.getStream1Length()}. ${res}`)
      },
      (err) =>console.log('subscribe error: ', err)
    )
  }

  stopWordStream() {
    this.sourceSubscription.unsubscribe();
  }
}
