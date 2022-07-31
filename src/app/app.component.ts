import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoadingService } from './shared/modules/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {

  public activeLinkClass: string = '';

  protected hostElement!: HTMLDivElement;

  private onComponentDestroy$ = new Subject;

  constructor(
    public loadingSvc: LoadingService,
    protected readonly renderer: Renderer2,
    public route: Router,
    protected readonly elementRef: ElementRef,
  ) {
    this.hostElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    (this.route.events).subscribe(event =>
      {
        if ( event instanceof NavigationEnd ) {
          console.log(event.url);
          this.hostElement.querySelectorAll('.navbar-item a').forEach( (el: Element) => {
            console.log((<any>el).href)
            if ( (<HTMLLinkElement>el).href === event.url ) {
              console.log("OK")
            }
          });
        }

      });
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.onComponentDestroy$.next();
    this.onComponentDestroy$.complete();
  }
}
