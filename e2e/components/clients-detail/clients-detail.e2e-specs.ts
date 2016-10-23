import { browser, element, by } from 'protractor/globals';

describe('Authentication capabilities', function() {
  let homeURL;
  let fecha = element(by.name('fecha'));
  let policynumber = '00';
  let username = element(by.xpath('//input[@id="md-input-0-input"]'));
  let password = element(by.xpath('//input[@id="md-input-1-input"]'));
  let loginButton = element(by.xpath('//div[@class="md-sidenav-content"]//button[.="Login "]'));

  it('should accept a valid PAS credencials and display homepage', function () {

    browser.get('/login');

    username.sendKeys('ecolombano');
    password.sendKeys('1234');
    loginButton.click();
    browser.waitForAngular('/http://localhost:4200/');
    // browser.waitForAngular('/client-policies');
    // browser.wait(setTimeout, 10);

    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
  });

  it('should search policies by date and policy number', function() {
    browser.get('http://localhost:4200/');
    homeURL = browser.getCurrentUrl();

    fecha.sendKeys('2016-11-05');

    expect(element(by.xpath('//md-list-item[@class="md-3-line"]//span[.="00"]')).getText()).toEqual(policynumber);
  });


});
