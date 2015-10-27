/// <reference path="../../typings/tsd.d.ts" />

import {
  Component,
  OnInit
} from 'angular2/web_worker/worker';

@Component({
  selector: 'user-cmp',
  templateUrl: 'client/user/user.html',
  styleUrls: ['client/user/user.css']
})
export class UserCmp implements OnInit {
  onInit() {
    console.log('user init');
  }
}
