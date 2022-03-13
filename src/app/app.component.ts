import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UntitledCarShare';
  isOpen: boolean = true;

  ngOnInit(): void {
    if (window.innerWidth < 768) this.isOpen = false;
    console.log(this.isOpen);
  }
}
