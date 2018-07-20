import { TestBed, getTestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpErrorResponse} from '@angular/common/http';
import { DogService } from './dog.service';
import { DogResponse } from '../models/dogResponse';
import { Dog } from '../models/dog';

describe('DogService', () => {
  let injector: TestBed;
  let service: DogService;
  let httpMock: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DogService(<any> httpClientSpy);

    injector = getTestBed();
    service = injector.get(DogService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should create DogService', () => {
    expect(service).toBeTruthy();
  });

  it('should return a DogResponse', () => {
    const expectedDogs: DogResponse = { status: 'succes', message: ['afflenpinschen'] };
    httpClientSpy.get.and.returnValue((expectedDogs));
    service.getDogsList().subscribe(
      dogs => expect(dogs).toEqual(expectedDogs, 'expected dogs'),
      fail
    );
  });

  it('should return a random Dog', () => {
    const expectedDog: Dog = { status: 'succes', message: 'afflenpinschen' };
    const breed = 'afflenpinschen';
    httpClientSpy.get.and.returnValue((expectedDog));
    service.getRandomDogImg(breed).subscribe(
      dog => expect(dog).toEqual(expectedDog, 'expected dogs'),
      fail
    );
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 Error, page not found. API documentation is located at https://dog.ceo/dog-api',
      status: 404, statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(errorResponse);
    service.getDogsList().subscribe(
      dogs => fail('expected an error, not dogs'),
      error  => expect(error.message).toContain('404 Error, page not found. API documentation is located at https://dog.ceo/dog-api')
    );
  });

});
