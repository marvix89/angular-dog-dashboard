import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DogService } from './dog.service';

describe('DogService', () => {
  let injector: TestBed;
  let service: DogService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogService]
    });
    injector = getTestBed();
    service = injector.get(DogService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
