import { SegguPage } from './app.po';

describe('seggu App', function() {
  let page: SegguPage;

  beforeEach(() => {
    page = new SegguPage();
  });

  it('should display message saying Seggu', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Seggu');
  });
});

