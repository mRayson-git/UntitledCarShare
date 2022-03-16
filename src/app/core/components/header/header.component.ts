import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavButton } from '../../models/nav-button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navButtons: NavButton[] = [];
  isMobile: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Create navButtons
    this.navButtons.push({
      text: 'List a ride',
      icon: 'edit',
      route: 'rides/list'
    });
    this.navButtons.push({
      text: 'Find a ride',
      icon: 'search',
      route: 'rides/find'
    });
    this.navButtons.push({
      text: 'Account',
      icon: 'account_circle',
      route: 'account/settings'
    });
    // check window size
    if (window.innerWidth < 768) this.isMobile = true;
  }

  onResize(event: any): void {
    this.isMobile = this.isSmallScreen();
  }

  isSmallScreen(): boolean {
    if (window.innerWidth < 768) return true;
    return false;
  }

  route(route: string): void {
    this.router.navigateByUrl(route);
  }

}
