import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { ExperiencesService } from '../../experiences.service';
import { ExperiencesModel } from '../../models/experiences.model';

/**
 * Data du composant
 */
 interface ComponentData {

  /** Données des tris */
  experiences: ExperiencesModel;

}


@Component({
  selector: 'strapi-experiences',
  templateUrl: './experiences.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent implements OnInit, AfterViewInit, OnDestroy {

  public data: ComponentData = {
    experiences: new ExperiencesModel
  }

  private onComponentDestroy$ = new Subject;


  constructor(
    private cdRef: ChangeDetectorRef,
    private client : ExperiencesService,
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
    // this.loadingSvc.startLoading(this.loadingSvc, 'XP');
    this.loadingSvc
      .doLoading( this.client.index(), this.loadingSvc, 'XP' )
      .pipe(takeUntil(this.onComponentDestroy$))
      .subscribe(
        (response: any ) => {
          this.data.experiences = new ExperiencesModel( response );
          this.cdRef.markForCheck();
        }
    );
  }

}
