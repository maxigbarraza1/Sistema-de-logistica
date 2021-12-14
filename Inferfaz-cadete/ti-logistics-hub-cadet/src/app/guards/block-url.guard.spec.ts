import { TestBed } from '@angular/core/testing';

import { BlockUrlGuard } from './block-url.guard';

describe('BlockUrlGuard', () => {
  let guard: BlockUrlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlockUrlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
