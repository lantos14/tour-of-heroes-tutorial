import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-messages-combiner',
  templateUrl: './messages-combiner.component.html',
  styleUrls: ['./messages-combiner.component.css', '../message-boards.common.css']
})
export class MessagesCombinerComponent {
  combinedTextResult = 'result: ';
  subscription;

  constructor(
    public messageService: MessageService,
  ) { }

  startSub() {    
    this.subscription = this.messageService.source.subscribe(
      res => this.combinedTextResult += `${res} `
    );
  }

  cancelSub() {
    this.subscription.unsubscribe();
    console.log('combined subscription has been stopped');
  }

}
