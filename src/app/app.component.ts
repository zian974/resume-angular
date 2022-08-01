import { Component,  OnInit, Renderer2 } from '@angular/core';
import { LoadingService } from './shared/modules/loading/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public constrastMode: string = "light";

  constructor(
    public loadingSvc: LoadingService,
    protected readonly renderer2: Renderer2
  ) {
  }

  ngOnInit() {}

  toggleContrastMode() {

    if ( this.constrastMode === 'light' ) {
      this.constrastMode ='dark';
      this.renderer2.addClass( document.querySelector('html'), 'dark' );
    }
    else {
      this.constrastMode ='light';
      this.renderer2.removeClass(document.querySelector('html'), 'dark');
    }
  }
}
