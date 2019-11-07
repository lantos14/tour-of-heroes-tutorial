import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message/message.service';
import { MessageIntervalService } from '../services/message-interval/message-interval.service';
import { map, concatMap, exhaustMap, delay, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    public messageService: MessageService,
    public messageInternalService: MessageIntervalService,
  ) { }

  getIntervals() {

  }

  ngOnInit() {

  }

}
