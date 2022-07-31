import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact/components/contact/contact.component';
import { ContactModule } from './contact/contact.module';

import { CvComponent } from './cv.component';
import { EducationsComponent } from './educations/components/educations/educations.component';
import { ExperiencesComponent } from './experiences/components/experiences/experiences.component';
import { ExperiencesService } from './experiences/experiences.service';
import { SkillsComponent } from './skills/components/skills/skills.component';

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  const ExperiencesSvcStub = {

  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ContactModule ],
      declarations: [ CvComponent, ExperiencesComponent, EducationsComponent, SkillsComponent ],

      providers: [
        {provide: ExperiencesService, useValue: ExperiencesSvcStub},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
