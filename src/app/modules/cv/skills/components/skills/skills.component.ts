import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SkillsService } from '../../skills.service';
import { SkillsGroupedModel, SkillsModel } from '../../models/skills.model';
import { SkillModel } from '../../models/skill.model';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface ComponentData {
  skills: SkillsGroupedModel;
}


@Component({
  selector: 'strapi-skills',
  templateUrl: './skills.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {

  /** Données publiques du composant */
  public data: ComponentData = {
    skills: new SkillsGroupedModel( new SkillsModel )
  }

  private onComponentDestroy$ = new Subject;


  constructor(
    private cdRef: ChangeDetectorRef,
    private client : SkillsService,
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
    // this.loadingSvc.startLoading(this.loadingSvc, 'SKILLS');
    this.loadingSvc
      .doLoading( this.client.index(), this.loadingSvc, 'SKILLS' )
      .pipe(takeUntil(this.onComponentDestroy$))
      .subscribe(
        (response: any ) => {
          this.data.skills = new SkillsGroupedModel(new SkillsModel( response ));
          this.cdRef.markForCheck();
        }
    );
  }

}
