import { WebngPage } from './app.po';

describe('webng App', () => {
  let page: WebngPage;

  beforeEach(() => {
    page = new WebngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
