import { browser, element, by } from 'protractor/globals';


describe('Authentication capabilities', function() {
  let loginURL;
  let username = element(by.xpath('//input[@id="md-input-0-input"]'));
  let password = element(by.xpath('//input[@id="md-input-1-input"]'));
  let loginButton = element(by.xpath('//div[@class="md-sidenav-content"]//button[.="Login "]'));
  let error = element(by.model('loginError'));

  it('should redirect to the login page if trying to load protected page while not authenticated', function() {
    browser.get('/login');
    loginURL = browser.getCurrentUrl();

    browser.get('/#/');
    expect(browser.getCurrentUrl()).toEqual(loginURL);
  });

  it('should warn on missing/malformed credentials', function() {
    username.clear();
    password.clear();

    browser.get('/login');

    password.sendKeys('asd');
    loginButton.click();
    expect(error.getText()).toMatch('usuario y/o contraseña incorrectos');

    username.sendKeys('asd');
    loginButton.click();
    expect(error.getText()).toMatch('usuario y/o contraseña incorrectos');

    username.sendKeys('asd');
    password.clear();
    loginButton.click();
    expect(error.getText()).toMatch('usuario y/o contraseña incorrectos');
  });

/* it('should accept a valid username and password', function() {
    username.clear();
    password.clear();

    username.sendKeys('asd');
    password.sendKeys('asd');
    loginButton.click();
    expect(browser.getCurrentUrl()).not.toEqual(loginURL);
  });*/

    it('should accept a valid username and password and display policies page', function () {

    browser.get('/login');

    username.sendKeys('usuario');
    password.sendKeys('usuario');
    loginButton.click();
    browser.waitForAngular('/client-policies');

    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/client-policies');
  });

  it('should return to the login page after logout', function() {
    // browser.get('/client-policies');
    let menu = element(by.xpath('//div[@class="md-sidenav-content"]//button[normalize-space(.)="menu"]'));
    // var logoutButton = $('a.logout');
    let logoutButton = element(by.xpath('//div[@class="md-list-text"]//span[.="Cerrar Sesion"]'));

    menu.click();
    logoutButton.click();
    browser.waitForAngular();

    expect(browser.getCurrentUrl()).toEqual(loginURL);
  });
});



