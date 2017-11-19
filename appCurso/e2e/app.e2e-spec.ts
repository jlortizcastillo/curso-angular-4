import { AppCursoPage } from './app.po';

describe('app-curso App', () => {
  let page: AppCursoPage;

  beforeEach(() => {
    page = new AppCursoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
