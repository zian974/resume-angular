import { Component,  OnInit, Renderer2 } from '@angular/core';
import { LoadingService } from './shared/modules/loading/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public loadingSvc: LoadingService,
    protected readonly renderer2: Renderer2
  ) {
  }

  ngOnInit() {
    if ( (('theme' in localStorage) && localStorage.theme === 'dark') || ( window.matchMedia('(prefers-color-scheme: dark)').matches) ) {
      this.addDarkMode();
    } else {
      this.removeDarkMode();
    }
  }

  toggleContrastMode() {
    if ( localStorage.theme === 'light' ) {
      this.addDarkMode();
    }
    else {
      this.removeDarkMode();
    }

  }

  addDarkMode() {
    localStorage.theme ='dark';
    this.renderer2.addClass( document.querySelector('html'), 'dark' );
  }

  removeDarkMode() {
    localStorage.theme = 'light'
    this.renderer2.removeClass( document.querySelector('html'), 'dark');
  }
}
