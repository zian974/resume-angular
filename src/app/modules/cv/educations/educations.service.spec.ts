import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EducationsService } from './educations.service';

describe('EducationsService', () => {
  let service: EducationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(EducationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
