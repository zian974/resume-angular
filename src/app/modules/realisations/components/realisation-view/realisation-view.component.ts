import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';


import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StrapiEntity, StrapiResponse } from 'src/app/shared/models/strapi/strapi.model';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { cleanUrl } from 'src/app/shared/utils/cleanUrl';
import { environment } from 'src/environments/environment';
import { Realisation, RealisationModel } from '../../models/realisation.model';
import { RealisationsService } from '../../realisations.service';

interface ComponentData {
  realisation: StrapiEntity<Realisation>;
  strapiUrl: string;
}

@Component({
  selector: 'strapi-realisation-view',
  templateUrl: './realisation-view.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  host: { },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealisationViewComponent implements OnInit {

  public data: ComponentData = {
    realisation: new RealisationModel(),
    strapiUrl: environment.strapiUrl
  }

  private onComponentDestroy$ = new Subject;

  constructor(
    private cdRef: ChangeDetectorRef,
    private client : RealisationsService,
    public loadingSvc: LoadingService,
    private markdownService: MarkdownService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.view();
    });
    if ( this.markdownService.renderer )
      this.markdownService.renderer.image = (href: string, title: string, text: string) => {
        // const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        let hrefFinal = cleanUrl(true, environment.apiUrl, href as string);
        if (hrefFinal === null) {
          return text;
        }

        let out = `<img src="${hrefFinal}" alt="${hrefFinal}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += '>';
        return out;
      };
  }

  ngOnDestroy() {
    this.onComponentDestroy$.next();
    this.onComponentDestroy$.complete()
  }


  view = ( ): void => {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.loadingSvc.startLoading(this.loadingSvc, 'REALISATION');
    this.loadingSvc
      .doLoading( this.client.view( id ), this.loadingSvc, 'REALISATION' )
      .pipe(takeUntil(this.onComponentDestroy$))
      .subscribe(
        (response: StrapiResponse<Realisation> ) => {
          this.data.realisation = new RealisationModel(response.data as StrapiEntity<Realisation>);
          this.cdRef.markForCheck();
        }
    );
  }

}
