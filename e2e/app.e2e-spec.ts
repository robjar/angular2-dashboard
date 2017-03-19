import { Angular2BrowserPage } from './app.po';

describe('angular2-browser App', function() {
  let page: Angular2BrowserPage;

  beforeEach(() => {
    page = new Angular2BrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
