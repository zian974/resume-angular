import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { ContactModel } from '../../contact.model';
import { ContactService } from '../../contact.service';


interface ComponentData {
  contact: ContactModel;
}


@Component({
  selector: 'strapi-contact-bottom',
  templateUrl: './contact-bottom.component.html',
  styles: [
    `
      /* :host {
        display: block;
      } */
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactBottomComponent implements OnInit, OnDestroy {

  public data: ComponentData = {
    contact: new ContactModel()
  }

  private onComponentDestroy$ = new Subject;

  constructor(
    private cdRef: ChangeDetectorRef,
    private client : ContactService,
    public loadingSvc: LoadingService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.index();
    });
  }

  ngOnDestroy() {
    this.onComponentDestroy$.next();
    this.onComponentDestroy$.complete()
  }


  index = ( ): void => {
    // this.loadingSvc.startLoading(this.loadingSvc, 'CONTACTS-BOTTOM');
    this.loadingSvc
      .doLoading( this.client.index(), this.loadingSvc, 'CONTACTS-BOTTOM' )
      .pipe(takeUntil(this.onComponentDestroy$))
      .subscribe(
        (response: any ) => {
          this.data.contact = new ContactModel(response.data);
          this.cdRef.markForCheck();
        }
    );
  }

}
