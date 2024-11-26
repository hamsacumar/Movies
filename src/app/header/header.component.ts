import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private auth: AuthService) { }

  gotoHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
  }
}
