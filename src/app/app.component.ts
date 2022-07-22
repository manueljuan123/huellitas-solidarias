import { Component } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'huellitas-solidarias-project';
  message = "huellitas-solidarias-project app is running!";

  ngOnInit() {
    AOS.init();
  }
}
