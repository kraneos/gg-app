import { browser, element, by } from 'protractor/globals';

export class PoliciesPage {
  navigateTo() {
    return browser.get('/client-policies');
  }

  getParagraphText() {
    return element(by.css('app-root md-sidenav-layout md-toolbar a')).getText();
  }
}
