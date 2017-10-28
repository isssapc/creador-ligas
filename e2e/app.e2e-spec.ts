import { CreadorLigasPage } from './app.po';

describe('creador-ligas App', () => {
  let page: CreadorLigasPage;

  beforeEach(() => {
    page = new CreadorLigasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
