import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-messages-interval',
  templateUrl: './messages-interval.component.html',
  styleUrls: ['./messages-interval.component.css']
})
export class MessagesIntervalComponent implements OnInit {

  constructor(
    public messageService: MessageService,
  ) { }

  ngOnInit() {

  }

}
