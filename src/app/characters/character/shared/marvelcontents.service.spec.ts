import { TestBed } from '@angular/core/testing';

import { MarvelcontentsService } from './marvelcontents.service';

describe('MarvelcontentsService', () => {
  let service: MarvelcontentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelcontentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
