import { TestBed } from '@angular/core/testing';
import { TabsPageRoutingModule } from './tabs-routing.module';
describe('TabsPageRoutingModule', () => {
  let pipe: TabsPageRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TabsPageRoutingModule] });
    pipe = TestBed.get(TabsPageRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
