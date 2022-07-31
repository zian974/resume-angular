import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { SkillsService } from '../../skills.service';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  const SkillsSvcStub = {

  };

  const LoadingSvcStub = {

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
      providers: [
        {provide: SkillsService, useValue: SkillsSvcStub},
        {provide: LoadingService, useValue: LoadingSvcStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
