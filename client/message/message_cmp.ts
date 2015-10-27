/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  OnInit
} from 'angular2/web_worker/worker';

@Component({
  selector: 'message-cmp',
  templateUrl: 'client/message/message.html',
  styleUrls: ['client/message/message.css']
})
export class MessageCmp implements OnInit {
  onInit() {
    console.log('message-cmp init');
  }
}
