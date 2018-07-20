import { async, TestBed } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let filter: FilterPipe;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    filter = new FilterPipe();
  });
  it('should filter items', () => {
        const items = ['afflenpinscher', 'mastiff'];
        const searchItem = 'ff';
        expect(filter.transform(items, searchItem).length).toEqual(2);
  });

  afterEach(() => {
      filter = null;
  });

});

