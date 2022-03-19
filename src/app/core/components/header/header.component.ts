import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavButton } from '../../models/nav-button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = false;

  //Auth buttons
  loginBtn: NavButton = {
    text: 'Login',
    icon: 'login',
    route: '/account/login'
  }
  logoutBtn: NavButton = {
    text: 'Logout',
    icon: 'logout',
    route: '/'
  }

  //Function buttons
  accountBtn: NavButton = {
    text: 'Account',
    icon: 'account_circle',
    route: '/account/info'
  }
  findRideBtn: NavButton = {
    text: 'Find a ride',
    icon: 'search',
    route: '/rides/find'
  }
  listRideBtn: NavButton = {
    text: 'List a ride',
    icon: 'add_circle',
    route: '/rides/list'
  }


  constructor(public auth: Auth) { }

  ngOnInit(): void {
    // check window size
    this.isMobile = this.isSmallScreen();
  }

  onResize(event: any): void {
    this.isMobile = this.isSmallScreen();
  }

  isSmallScreen(): boolean {
    if (window.innerWidth < 768) return true;
    return false;
  }

  logout(): void {
    this.auth.signOut()
    .then(result => console.log(`Signed out: ${result}`))
    .catch(err => console.log(`Error signing out: ${err}`));
  }

}
