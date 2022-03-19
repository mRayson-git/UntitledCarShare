import { Component, OnInit } from '@angular/core';
import { Auth, browserSessionPersistence } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UntitledCarShare';

  constructor(private auth: Auth) {
    this.auth.setPersistence(browserSessionPersistence);
  }
}
