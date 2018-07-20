import { async, inject, TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { DogComponent } from './dog.component';
import { DogService } from '../../services/dog.service';
import { DogResponse } from '../../models/dogResponse';
import { of } from '../../../../node_modules/rxjs';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../filters/filter.pipe';

describe('DogComponent', () => {
  let component: DogComponent;
   let fixture: ComponentFixture<DogComponent>;
   let getDogsListSpy;



  beforeEach(() => {
    const dr: DogResponse = { status : 'success', message : ['afflenpinschen']};
    const _dogService = jasmine.createSpyObj('DogService', ['getDogsList']);
    getDogsListSpy = _dogService.getDogsList.and.returnValue(of(dr));
    TestBed.configureTestingModule({
      declarations: [
        DogComponent,
        FilterPipe
      ],
      providers: [
        DogService
      ],
      imports: [HttpClientTestingModule, FormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;
  });


  it('should create DogComponent', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    component = null;
    _dogService = null;
  });

});

