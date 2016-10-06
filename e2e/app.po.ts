import { browser, element, by } from 'protractor/globals';

export class SegguPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-sidenav-layout md-toolbar a')).getText();
  }
}
