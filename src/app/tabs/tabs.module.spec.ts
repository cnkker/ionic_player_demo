import { TestBed } from '@angular/core/testing';
import { TabsPageModule } from './tabs.module';
describe('TabsPageModule', () => {
  let pipe: TabsPageModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TabsPageModule] });
    pipe = TestBed.get(TabsPageModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
