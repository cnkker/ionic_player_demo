import { TestBed } from '@angular/core/testing';
import { Tab3PageModule } from './tab3.module';
describe('Tab3PageModule', () => {
  let pipe: Tab3PageModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Tab3PageModule] });
    pipe = TestBed.get(Tab3PageModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
