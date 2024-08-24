import { TestBed } from '@angular/core/testing';

import { StarWarListService } from './star-war-list.service';

describe('StarWarListService', () => {
  let service: StarWarListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
