import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { RealisationsService } from '../../realisations.service';
import { Realisation, RealisationModel } from '../../models/realisation.model';
import { environment } from 'src/environments/environment';
import { StrapiEntity, StrapiResponse } from '../../../../shared/models/strapi/strapi.model';

interface ComponentData {
  realisations: StrapiEntity<Realisation>[];
  strapiUrl: string;
}


@Component({
  selector: 'strapi-realisations',
  templateUrl: './realisations.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealisationsComponent implements OnInit {

  public data: ComponentData = {
    realisations: [],
    strapiUrl: environment.strapiUrl
  }

  private onComponentDestroy$ = new Subject;


  constructor(
      private cdRef: ChangeDetectorRef,
      private client : RealisationsService,
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
    // this.loadingSvc.startLoading(this.loadingSvc, 'REALISATIONS');
    this.loadingSvc
      .doLoading( this.client.index(), this.loadingSvc, 'REALISATIONS' )
      .pipe(takeUntil(this.onComponentDestroy$))
      .subscribe(
        (response: StrapiResponse<Realisation> ) => {
          (<StrapiEntity<Realisation>[]>response.data).forEach(element => {
            this.data.realisations.push(new RealisationModel(element));
          });
          this.cdRef.markForCheck();
        }
    );
  }

}
