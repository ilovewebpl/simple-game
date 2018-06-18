import { GappPage } from './app.po';

describe('gapp App', () => {
  let page: GappPage;

  beforeEach(() => {
    page = new GappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
