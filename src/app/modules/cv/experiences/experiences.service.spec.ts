import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ExperiencesService } from './experiences.service';

describe('ExperiencesService', () => {
  let service: ExperiencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        ExperiencesService
      ]
    });
    service = TestBed.inject( ExperiencesService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
