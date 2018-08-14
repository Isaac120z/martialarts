import { MartialArtsAppPage } from './app.po';

describe('martial-arts-app App', () => {
  let page: MartialArtsAppPage;

  beforeEach(() => {
    page = new MartialArtsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
