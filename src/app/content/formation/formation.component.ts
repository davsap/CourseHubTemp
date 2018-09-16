import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../../model/formation';
import { User } from '../../model/user';
import { CookieService } from '../../../../node_modules/ngx-cookie-service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  user: User;
  show: boolean;

    constructor(private cookieService: CookieService) { }

    ngOnInit() {
      if (this.cookieService.get('user')) {
      this.user = JSON.parse(this.cookieService.get('user'));
      if (this.user.pseudo !== null) { this.show = true; }
      }
    }
  }
