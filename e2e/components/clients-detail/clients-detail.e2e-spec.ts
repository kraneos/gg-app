import { browser, element, by } from 'protractor/globals';


describe('Client details', function() {

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
    browser.waitForAngular('http://localhost:4200/');
    // browser.findElement(by.css('#md-input-0-input')).clear();
    let fecha = browser.findElement(by.id('md-input-0-input'));
    let policyid = '00';
    let clientlastname = 'Colombano';

    fecha.sendKeys('11/05');
    browser.waitForAngular('http://localhost:4200/');

    expect(element(by.xpath('//md-list-item[@class="md-3-line"]//span[.="00"]')).getText()).toEqual(policyid);
    expect(element(by.xpath('//md-list-item[@class="md-3-line"]//span[.="Colombano"]')).getText()).toEqual(clientlastname);
  });


});
