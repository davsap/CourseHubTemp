import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../../node_modules/ngx-cookie-service';
import { User } from '../model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user: User;
show: boolean;
  constructor(private cookieService: CookieService) { }
  private toggleSideBar() {
    document.getElementById('sidebar').classList.toggle('expanded');
  }
  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get('user'));
    if (this.user.pseudo !== null) { this.show = true; }
  }

  onClick() {
    this.cookieService.delete('token');
    this.cookieService.delete('user');
    this.show = false;
  }
}
