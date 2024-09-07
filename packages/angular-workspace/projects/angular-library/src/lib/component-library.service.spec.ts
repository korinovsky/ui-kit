import { TestBed } from '@angular/core/testing';

import { ComponentLibraryService } from './angular-library.service';

describe('ComponentLibraryService', () => {
  let service: ComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
