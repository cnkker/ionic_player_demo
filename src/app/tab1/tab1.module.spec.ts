import { TestBed } from '@angular/core/testing';
import { Tab1PageModule } from './tab1.module';
describe('Tab1PageModule', () => {
  let pipe: Tab1PageModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Tab1PageModule] });
    pipe = TestBed.get(Tab1PageModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
