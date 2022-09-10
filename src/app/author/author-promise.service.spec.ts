import { TestBed } from '@angular/core/testing';

import { AuthorPromiseService } from './author-promise.service';

describe('AuthorPromiseService', () => {
  let service: AuthorPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
