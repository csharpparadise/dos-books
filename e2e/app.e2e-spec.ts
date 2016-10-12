import { DevosWorkshopPage } from './app.po';

describe('devos-workshop App', function() {
  let page: DevosWorkshopPage;

  beforeEach(() => {
    page = new DevosWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
