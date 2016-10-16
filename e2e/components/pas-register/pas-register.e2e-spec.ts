import { browser, element, by } from 'protractor/globals';


describe('Register functionality', function() {
  let loginURL;
  let email = element(by.xpath('//input[@id="md-input-0-input"]'));
  let user = element(by.xpath('//input[@id="md-input-1-input"]'));
  let password = element(by.xpath('//input[@id="md-input-2-input"]'));
  let password2 = element(by.xpath('//input[@id="md-input-3-input"]'));
  let phone = element(by.xpath('//input[@id="md-input-4-input"]'));
  let company = element(by.xpath('//input[@id="md-input-5-input"]'));
  let createuserbutton = element(by.xpath('//div[@class="md-sidenav-content"]//button[.="Crear Usuario "]'));

  it('Check the URL', function() {
    browser.get('/pas-register');
    loginURL = browser.getCurrentUrl();

    expect(browser.getCurrentUrl()).toEqual(loginURL);
  });

  it('Register should fail', function() {
    browser.get('/pas-register');

    email.sendKeys('asd@asd.com');
    user.sendKeys('usuario');
    password.sendKeys('usuario');
    password2.sendKeys('usuario');
    phone.sendKeys('45545545');
    company.sendKeys('Seggu');

    createuserbutton.click();

    expect(element(by.css('button.md-button-focus')).getText()).toEqual('Ya se hizo un usuario para esa empresa');

  });
  });
