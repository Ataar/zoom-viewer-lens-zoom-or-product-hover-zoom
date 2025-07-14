import { TestBed } from '@angular/core/testing';

import { Of2Service } from './of2.service';

describe('Of2Service', () => {
  let service: Of2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Of2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
