import { TestBed } from '@angular/core/testing';

import { ItemsdbService } from './itemsdb.service';

describe('ItemsdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsdbService = TestBed.get(ItemsdbService);
    expect(service).toBeTruthy();
  });
});
