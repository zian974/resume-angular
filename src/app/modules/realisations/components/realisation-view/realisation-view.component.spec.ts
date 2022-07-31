import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownComponent, MarkdownModule, MarkdownService } from 'ngx-markdown';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { RealisationsService } from '../../realisations.service';

import { RealisationViewComponent } from './realisation-view.component';

describe('RealisationViewComponent', () => {
  let component: RealisationViewComponent;
  let fixture: ComponentFixture<RealisationViewComponent>;

  const RealisationSvcStub = {

  };

  const LoadingSvcStub = {

  };

  const MarkdownSvcStub = {
    parse: () => {},
    render: () => {},
    reload$: new Subject,
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ RealisationViewComponent, MarkdownComponent],
      imports: [
        RouterTestingModule, MarkdownModule.forChild(),
      ],
      providers: [
        {provide: MarkdownService, useValue: MarkdownSvcStub},
        {provide: RealisationsService, useValue: RealisationSvcStub},
        {provide: LoadingService, useValue: LoadingSvcStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
