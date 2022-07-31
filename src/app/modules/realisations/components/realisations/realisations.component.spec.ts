import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { RealisationsService } from '../../realisations.service';

import { RealisationsComponent } from './realisations.component';

describe('RealisationsComponent', () => {
  let component: RealisationsComponent;
  let fixture: ComponentFixture<RealisationsComponent>;

  const RealisationsSvcStub = {

  };

  const LoadingSvcStub = {

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [  RouterTestingModule, ],
      declarations: [ RealisationsComponent ],
      providers: [
        {provide: RealisationsService, useValue: RealisationsSvcStub},
        {provide: LoadingService, useValue: LoadingSvcStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
