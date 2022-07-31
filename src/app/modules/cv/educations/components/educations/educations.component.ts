import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { EducationsService } from '../../educations.service';
import { EducationsModel } from '../../models/educations.model';

/**
 * Data du composant
 */
 interface ComponentData {

  /** Données des tris */
  educations: EducationsModel;

}


@Component({
  selector: 'strapi-educations',
  templateUrl: './educations.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationsComponent implements OnInit, AfterViewInit, OnDestroy {


  /** Données publiques du composant */
  public data: ComponentData = {
    educations: new EducationsModel
  }

  private onComponentDestroy$ = new Subject;


  constructor(
    private cdRef: ChangeDetectorRef,
    private client : EducationsService,
    public loadingSvc: LoadingService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.index();
    });
  }

  ngOnDestroy() {
    this.onComponentDestroy$.next();
    this.onComponentDestroy$.complete()
  }


  index = ( ): void => {
    // this.loadingSvc.startLoading(this.loadingSvc, 'EDU');
    this.loadingSvc
      .doLoading( this.client.index(), this.loadingSvc, 'EDU' )
      .pipe(takeUntil(this.onComponentDestroy$))
      .subscribe(
        (response: any ) => {
          this.data.educations = new EducationsModel( response );
          this.cdRef.markForCheck();
        }
    );
  }

}
