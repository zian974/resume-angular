import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges, ViewContainerRef
} from '@angular/core';
import {LoadingSpinnerComponent} from '../loading-spinner/loading-spinner.component';

const OVERLAY_CLASS = 'loading-overlay';

// This directive places an overlay with a loading spinner over its host element
// if isLoading equals to true and hides the overlay when isLoading becomes false.
@Directive({
  selector: '[loadingHost]'
})
export class LoadingHostDirective implements OnChanges {
  @Input('loadingHost') isLoading = false;

  protected overlayElement!: HTMLDivElement;
  protected spinnerElement!: HTMLDivElement;
  protected hostElement!: HTMLDivElement;

  constructor(
    private cdRef: ChangeDetectorRef,
    protected readonly elementRef: ElementRef,
    protected readonly renderer: Renderer2,
    protected readonly changeDetectorRef: ChangeDetectorRef,
    protected readonly viewContainerRef: ViewContainerRef,
    protected readonly componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.hostElement = this.elementRef.nativeElement;
    // this.hostElement.style.position = 'relative';
  }

  ngOnChanges(changes: SimpleChanges): void {

    if ( changes.isLoading.firstChange ) {
      return;
    }

    if (!this.overlayElement || !this.spinnerElement) {
      this.init();
    }


    if (changes.isLoading) {
      const isLoadingValue = changes.isLoading.currentValue;
      if (isLoadingValue) {
        this.addLoadingIndicator();
      }
      else {
        this.removeLoadingIndicator();
      }
    }
  }

  protected addLoadingIndicator(): void {
    this.renderer.appendChild(this.hostElement, this.overlayElement);
    this.renderer.appendChild(this.overlayElement, this.spinnerElement);

    // this.cdRef.detectChanges()
  }

  protected removeLoadingIndicator(): void {
    this.renderer.removeChild(this.overlayElement, this.spinnerElement);
    this.renderer.removeChild(this.hostElement, this.overlayElement);
    this.viewContainerRef.clear();

    // this.cdRef.detectChanges()
  }

  protected init(): void {
    this.initOverlayElement();
    this.initSpinnerComponent();
  }

  protected initSpinnerComponent(): void {
    const spinnerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingSpinnerComponent);
    const spinnerComponent = this.viewContainerRef.createComponent(spinnerComponentFactory);
    this.spinnerElement = spinnerComponent.location.nativeElement;
    this.spinnerElement.style.position = 'absolute';
    this.spinnerElement.style.top = '50%';
    this.spinnerElement.style.left = '50%';
    this.spinnerElement.style.transform = 'translate(-50%,calc(-50% - 16px ))';
  }

  protected initOverlayElement(): void {
    this.overlayElement = this.renderer.createElement('div');
    this.renderer.addClass(this.overlayElement, OVERLAY_CLASS);
    this.overlayElement.style.inset = '0';
    this.overlayElement.style.position = 'fixed';
  }
}

