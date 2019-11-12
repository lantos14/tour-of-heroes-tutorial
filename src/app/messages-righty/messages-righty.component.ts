import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message/message.service';
import { HttpService } from '../services/http/http-service';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-messages-righty',
  templateUrl: './messages-righty.component.html',
  styleUrls: ['./messages-righty.component.css']
})
export class MessagesRighty {
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
        this.messageService.addRightyMsg(`${this.messageService.getStream2Length()}. ${res}`)
      },
      (err) =>console.log('subscribe error: ', err)
    )
  }

  stopWordStream() {
    this.sourceSubscription.unsubscribe();
  }

}
