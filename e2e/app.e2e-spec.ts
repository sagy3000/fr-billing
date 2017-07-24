import { FrBillingPage } from './app.po';

describe('fr-billing App', () => {
  let page: FrBillingPage;

  beforeEach(() => {
    page = new FrBillingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
