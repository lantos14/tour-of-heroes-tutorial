import { HeroNameColorizerPipe } from './hero-name-colorizer.pipe';

describe('HeroNameColorizerPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroNameColorizerPipe();
    expect(pipe).toBeTruthy();
  });
});
