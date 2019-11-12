import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-messages-combiner',
  templateUrl: './messages-combiner.component.html',
  styleUrls: ['./messages-combiner.component.css', '../message-boards.common.css']
})
export class MessagesCombinerComponent {
  combinedTextResult = 'result: ';

  constructor(
    public messageService: MessageService,
  ) { }

  handleStartClick() {
    console.log('handleStartClick is clicked');
    this.messageService.startStreamButton.next();
  }

}
