import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  constructor(
    public messageService: MessageService,
  ) { }

  handleClick() {
    this.messageService.simpleObservable
      .subscribe((res) => this.messageService.addLeftyMsg(res));
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
