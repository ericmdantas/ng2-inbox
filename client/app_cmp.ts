/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  OnInit
} from 'angular2/web_worker/worker';

import {MessageCmp} from 'client/message/message_cmp.js';
import {UserCmp} from 'client/user/user_cmp.js';

@Component({
  selector: 'app-cmp',
  templateUrl: 'client/app.html',
  //styleUrls: ['client/app.css'],
  directives: [MessageCmp, UserCmp]
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app init');
  }
}
