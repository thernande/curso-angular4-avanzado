import { ModulemailModule } from './modulemail.module';

describe('ModulemailModule', () => {
  let modulemailModule: ModulemailModule;

  beforeEach(() => {
    modulemailModule = new ModulemailModule();
  });

  it('should create an instance', () => {
    expect(modulemailModule).toBeTruthy();
  });
});
