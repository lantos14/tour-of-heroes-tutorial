import { Component, OnInit } from '@angular/core';
import { MessageIntervalService } from '../services/message-interval/message-interval.service';

@Component({
  selector: 'app-messages-interval',
  templateUrl: './messages-interval.component.html',
  styleUrls: ['./messages-interval.component.css']
})
export class MessagesIntervalComponent implements OnInit {

  constructor(
    public msgInternalService: MessageIntervalService,
  ) { }

  ngOnInit() {

  }

}
