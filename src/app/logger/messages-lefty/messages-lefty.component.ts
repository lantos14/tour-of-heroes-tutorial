import { Component } from '@angular/core';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-messages-lefty',
  templateUrl: './messages-lefty.component.html',
  styleUrls: ['./messages-lefty.component.css', '../message-boards.common.css']
})
export class MessagesLeftyComponent {
  sourceSubscription;

  constructor(
    public messageService: MessageService,
  ) { }

  getWordStream() {
    // this.sourceSubscription = this.messageService.source.subscribe(
    //   (res) => {
    //     this.messageService.addLeftyMsg(`${this.messageService.getStream1Length()}. ${res}`)
    //   },
    //   (err) =>console.log('subscribe error: ', err)
    // )s
  }

  stopWordStream() {
    this.sourceSubscription.unsubscribe();
  }
}
