import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationsService } from '../../educations.service';

import { EducationsComponent } from './educations.component';

describe('EducationsComponent', () => {
  let component: EducationsComponent;
  let fixture: ComponentFixture<EducationsComponent>;

  const EducationsSvcStub = {

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationsComponent ],
      providers: [
        {provide: EducationsService, useValue: EducationsSvcStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
