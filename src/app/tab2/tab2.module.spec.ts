import { TestBed } from '@angular/core/testing';
import { Tab2PageModule } from './tab2.module';
describe('Tab2PageModule', () => {
  let pipe: Tab2PageModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Tab2PageModule] });
    pipe = TestBed.get(Tab2PageModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
