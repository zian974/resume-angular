import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { ExperiencesService } from '../../experiences.service';

import { ExperiencesComponent } from './experiences.component';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;

  const ExperiencesSvcStub = {

  };

  const LoadingSvcStub = {

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesComponent ],
      providers: [
        {provide: ExperiencesService, useValue: ExperiencesSvcStub},
        {provide: LoadingService, useValue: LoadingSvcStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
