import { AppPage } from './app.po';
import { browser, Key } from 'protractor';

/* This test suite is for all valid cases*/
/* Valid test cases starts here */
describe('Valid Cases', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getLastNameTextbox().sendKeys('Patel');
    page.getGenderRadioMale().click();
    page.getEmailTextbox().sendKeys('junaid.patel@cerebriai.com');
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getCityTextbox().sendKeys('Toronto');
    page.getStateTextbox().sendKeys('Ontario');
    page.getZipCodeTextbox().sendKeys('12345');
    page.getSubmitButton().click();
  });

  afterEach(() => {
    browser.switchTo().alert().accept();
  });

  it('first name should be visible in the alert box', () => {
    let alertBox = browser.switchTo().alert();
    expect(alertBox.getText()).toContain(`"firstName": "Junaid"`);  
   });
  
  it('last name should be visible in the alert box', () => {
    let alertBox = browser.switchTo().alert();
    expect(alertBox.getText()).toContain(`"lastName": "Patel"`);  
  });

  it('gender should be visible in the alert box', () => {
    let alertBox = browser.switchTo().alert();
    expect(alertBox.getText()).toContain(`"gender": "male"`);  
  });

  it('email should be visible in the alert box', () => {
    let alertBox = browser.switchTo().alert();
    expect(alertBox.getText()).toContain(`"email": "junaid.patel@cerebriai.com"`);  
  });

  it('phone number should be visible in the alert box', () => {
    let alertBox = browser.switchTo().alert();
    expect(alertBox.getText()).toContain(`"phone": "123-123-1234"`);  
  });

  it('city should be visible in the alert box', () => {
    let alertBox = browser.switchTo().alert();
    expect(alertBox.getText()).toContain(`"city": "Toronto"`);  
  });

  it('state should be visible in the alert box', () => {
    let alertBox = browser.switchTo().alert();
    expect(alertBox.getText()).toContain(`"state": "Ontario"`);  
  });

  it('zip code should be visible in the alert box', () => {
    let alertBox = browser.switchTo().alert();
    expect(alertBox.getText()).toContain(`"zipcode": "12345"`);  
  });

});
/* Valid test cases ends here */


/* This test suite is for all firstname validations*/
/* FirstName validations starts here*/
describe('FirstName Validations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getLastNameTextbox().sendKeys('Patel');
    page.getGenderRadioMale().click();
    page.getEmailTextbox().sendKeys('junaid.patel@cerebriai.com');
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getCityTextbox().sendKeys('Toronto');
    page.getStateTextbox().sendKeys('Ontario');
    page.getZipCodeTextbox().sendKeys('12345');
  });

  it('should give required field error and disable submit button', () => {
    page.getFirstNameTextbox().sendKeys('');
    page.getFirstNameTextbox().sendKeys(Key.TAB);
    let firstName = page.getFirstNameTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorFirstNameReq().isDisplayed()).toEqual(true),
      expect(firstName).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow less than 3 characters and disable submit button', () => {
    page.getFirstNameTextbox().sendKeys('Ab');
    page.getFirstNameTextbox().sendKeys(Key.TAB);
    let firstName = page.getFirstNameTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorFirstNameMin3().isDisplayed()).toEqual(true),
      expect(firstName).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow more than 20 characters and disable submit button', () => {
    page.getFirstNameTextbox().sendKeys('Abcdefghijklmnopqrstu');
    page.getFirstNameTextbox().sendKeys(Key.TAB);
    let firstName = page.getFirstNameTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorFirstNameMax20().isDisplayed()).toEqual(true),
      expect(firstName).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case', () => {
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getFirstNameTextbox().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let firstName = page.getFirstNameTextbox().getAttribute('class');
    Promise.all([
      expect(firstName).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

});
/* FirstName validations ends here*/


/* This test suite is for all lastname validations*/
/* LastName validations starts here*/
describe('LastName Validations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getGenderRadioMale().click();
    page.getEmailTextbox().sendKeys('junaid.patel@cerebriai.com');
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getCityTextbox().sendKeys('Toronto');
    page.getStateTextbox().sendKeys('Ontario');
    page.getZipCodeTextbox().sendKeys('12345');
  });

  it('should give required field error and disable submit button', () => {
    page.getLastNameTextbox().sendKeys('');
    page.getLastNameTextbox().sendKeys(Key.TAB);
    let lastName = page.getLastNameTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorLastNameReq().isDisplayed()).toEqual(true),
      expect(lastName).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow less than 3 characters and disable submit button', () => {
    page.getLastNameTextbox().sendKeys('Pa');
    page.getLastNameTextbox().sendKeys(Key.TAB);
    let lastName = page.getLastNameTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorLastNameMin3().isDisplayed()).toEqual(true),
      expect(lastName).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow more than 20 characters and disable submit button', () => {
    page.getLastNameTextbox().sendKeys('Abcdefghijklmnopqrstu');
    page.getLastNameTextbox().sendKeys(Key.TAB);
    let lastName = page.getLastNameTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorLastNameMax20().isDisplayed()).toEqual(true),
      expect(lastName).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case', () => {
    page.getLastNameTextbox().sendKeys('Patel');
    page.getLastNameTextbox().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let lastName = page.getLastNameTextbox().getAttribute('class');
    Promise.all([
      expect(lastName).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

});
/* LastName validations ends here*/


/* This test suite is for all gender validations*/
/* Gender validations starts here*/
describe('Gender Validations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getLastNameTextbox().sendKeys('Patel');
    page.getEmailTextbox().sendKeys('junaidpatel@cerebriai.com');
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getCityTextbox().sendKeys('Toronto');
    page.getStateTextbox().sendKeys('Ontario');
    page.getZipCodeTextbox().sendKeys('12345');
  });

  it('should give required field error and disable submit button if nothing selected', () => {
    page.getGenderRadioFemale().sendKeys(Key.TAB);
    let gender = page.getGenderRadioMale().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorGenderReq().isDisplayed()).toEqual(true),
      expect(gender).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case only if any one radio button is selected', () => {
    page.getGenderRadioFemale().click();
    page.getGenderRadioFemale().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let gender = page.getGenderRadioFemale().getAttribute('class');
    Promise.all([
      expect(gender).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

});
/* Gender validations ends here*/


/* This test suite is for all email validations*/
/* Email validations starts here*/
describe('Email Validations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getLastNameTextbox().sendKeys('Patel');
    page.getGenderRadioMale().click();
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getCityTextbox().sendKeys('Toronto');
    page.getStateTextbox().sendKeys('Ontario');
    page.getZipCodeTextbox().sendKeys('12345');
  });

  it('should give required field error and disable submit button', () => {
    page.getEmailTextbox().sendKeys('');
    page.getEmailTextbox().sendKeys(Key.TAB);
    let email = page.getEmailTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorEmailReq().isDisplayed()).toEqual(true),
      expect(email).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow if incorrect format and disable submit button', () => {
    page.getEmailTextbox().sendKeys('junaidpatel$cerebriai.com');
    page.getEmailTextbox().sendKeys(Key.TAB);
    let email = page.getEmailTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorEmailFormat().isDisplayed()).toEqual(true),
      expect(email).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow if special characters other than . or _ and disable submit button', () => {
    page.getEmailTextbox().sendKeys('junaid,patel@cerebriai.com');
    page.getEmailTextbox().sendKeys(Key.TAB);
    let email = page.getEmailTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorEmailFormat().isDisplayed()).toEqual(true),
      expect(email).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case', () => {
    page.getEmailTextbox().sendKeys('junaidpatel@cerebriai.com');
    page.getEmailTextbox().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let email = page.getEmailTextbox().getAttribute('class');
    Promise.all([
      expect(email).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case if it has . or _', () => {
    page.getEmailTextbox().sendKeys('junaid_patel@cerebriai.com');
    page.getEmailTextbox().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let email = page.getEmailTextbox().getAttribute('class');
    Promise.all([
      expect(email).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

});
/* Email validations ends here*/


/* This test suite is for all phonenumber validations*/
/* PhoneNumber validations starts here*/
describe('PhoneNumber Validations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getLastNameTextbox().sendKeys('Patel');
    page.getGenderRadioMale().click();
    page.getEmailTextbox().sendKeys('junaidpatel@cerebriai.com');
    page.getCityTextbox().sendKeys('Toronto');
    page.getStateTextbox().sendKeys('Ontario');
    page.getZipCodeTextbox().sendKeys('12345');
  });

  it('should give required field error and disable submit button', () => {
    page.getPhoneNumberTextbox().sendKeys('');
    page.getPhoneNumberTextbox().sendKeys(Key.TAB);
    let phone = page.getPhoneNumberTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorPhoneReq().isDisplayed()).toEqual(true),
      expect(phone).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow if incorrect format and disable submit button', () => {
    page.getPhoneNumberTextbox().sendKeys('1234567890');
    page.getPhoneNumberTextbox().sendKeys(Key.TAB);
    let phone = page.getPhoneNumberTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorPhoneFormat().isDisplayed()).toEqual(true),
      expect(phone).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case only if format is like 123-456-7890', () => {
    page.getPhoneNumberTextbox().sendKeys('321-234-5432');
    page.getPhoneNumberTextbox().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let phone = page.getPhoneNumberTextbox().getAttribute('class');
    Promise.all([
      expect(phone).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

});
/* PhoneNumber validations ends here*/


/* This test suite is for all city validations*/
/* City validations starts here*/
describe('City Validations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getLastNameTextbox().sendKeys('Patel');
    page.getGenderRadioMale().click();
    page.getEmailTextbox().sendKeys('junaid.patel@cerebriai.com');
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getStateTextbox().sendKeys('Ontario');
    page.getZipCodeTextbox().sendKeys('12345');
  });

  it('should give required field error and disable submit button', () => {
    page.getCityTextbox().sendKeys('');
    page.getCityTextbox().sendKeys(Key.TAB);
    let city = page.getCityTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorCityReq().isDisplayed()).toEqual(true),
      expect(city).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow digits and disable submit button', () => {
    page.getCityTextbox().sendKeys('Toronto1');
    page.getCityTextbox().sendKeys(Key.TAB);
    let city = page.getCityTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorCityAlpha().isDisplayed()).toEqual(true),
      expect(city).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow less than 3 characters and disable submit button', () => {
    page.getCityTextbox().sendKeys('To');
    page.getCityTextbox().sendKeys(Key.TAB);
    let city = page.getCityTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorCityMin3().isDisplayed()).toEqual(true),
      expect(city).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow more than 20 characters and disable submit button', () => {
    page.getCityTextbox().sendKeys('KitchenerOntarioCanada');
    page.getCityTextbox().sendKeys(Key.TAB);
    let city = page.getCityTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorCityMax20().isDisplayed()).toEqual(true),
      expect(city).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case', () => {
    page.getCityTextbox().sendKeys('Toronto');
    page.getCityTextbox().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let city = page.getCityTextbox().getAttribute('class');
    Promise.all([
      expect(city).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

});
/* City validations ends here*/


/* This test suite is for all state validations*/
/* State validations starts here*/
describe('State Validations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getLastNameTextbox().sendKeys('Patel');
    page.getGenderRadioMale().click();
    page.getEmailTextbox().sendKeys('junaid.patel@cerebriai.com');
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getCityTextbox().sendKeys('Toronto');
    page.getZipCodeTextbox().sendKeys('12345');
  });

  it('should give required field error and disable submit button', () => {
    page.getStateTextbox().sendKeys('');
    page.getStateTextbox().sendKeys(Key.TAB);
    let state = page.getStateTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorStateReq().isDisplayed()).toEqual(true),
      expect(state).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow digits and disable submit button', () => {
    page.getStateTextbox().sendKeys('Ontario1');
    page.getStateTextbox().sendKeys(Key.TAB);
    let state = page.getStateTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorStateAlpha().isDisplayed()).toEqual(true),
      expect(state).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow less than 3 characters and disable submit button', () => {
    page.getStateTextbox().sendKeys('On');
    page.getStateTextbox().sendKeys(Key.TAB);
    let state = page.getStateTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorStateMin3().isDisplayed()).toEqual(true),
      expect(state).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow more than 20 characters and disable submit button', () => {
    page.getStateTextbox().sendKeys('KitchenerOntarioCanada');
    page.getStateTextbox().sendKeys(Key.TAB);
    let state = page.getStateTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorStateMax20().isDisplayed()).toEqual(true),
      expect(state).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case', () => {
    page.getStateTextbox().sendKeys('Ontario');
    page.getStateTextbox().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let state = page.getStateTextbox().getAttribute('class');
    Promise.all([
      expect(state).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

});
/* State validations ends here*/


/* This test suite is for all zipcode validations*/
/* ZipCode validations starts here*/
describe('ZipCode Validations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getLastNameTextbox().sendKeys('Patel');
    page.getGenderRadioMale().click();
    page.getEmailTextbox().sendKeys('junaid.patel@cerebriai.com');
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getCityTextbox().sendKeys('Toronto');
    page.getStateTextbox().sendKeys('Ontario');
  });

  it('should give required field error and disable submit button', () => {
    page.getZipCodeTextbox().sendKeys('');
    page.getZipCodeTextbox().sendKeys(Key.TAB);
    let zip = page.getZipCodeTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorZipReq().isDisplayed()).toEqual(true),
      expect(zip).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow less than 5 characters and disable submit button', () => {
    page.getZipCodeTextbox().sendKeys('1234');
    page.getZipCodeTextbox().sendKeys(Key.TAB);
    let zip = page.getZipCodeTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorZipMin5().isDisplayed()).toEqual(true),
      expect(zip).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow more than 5 characters and disable submit button', () => {
    page.getZipCodeTextbox().sendKeys('123456');
    page.getZipCodeTextbox().sendKeys(Key.TAB);
    let zip = page.getZipCodeTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorZipMax5().isDisplayed()).toEqual(true),
      expect(zip).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should not allow alphabets and disable submit button', () => {
    page.getZipCodeTextbox().sendKeys('1234A');
    page.getZipCodeTextbox().sendKeys(Key.TAB);
    let zip = page.getZipCodeTextbox().getAttribute('class');
    let submitBtn = page.getSubmitButton();
    Promise.all([
      expect(page.getErrorZipOnlyDigits().isDisplayed()).toEqual(true),
      expect(zip).toContain('ng-invalid'),
      expect(submitBtn.isEnabled()).toBe(false)]).catch(function() {
        console.error("Error");
    })
  });

  it('should be a valid case if its only digits and size is 5', () => {
    page.getZipCodeTextbox().sendKeys('12345');
    page.getZipCodeTextbox().sendKeys(Key.TAB);
    let submitBtn = page.getSubmitButton();
    let zip = page.getZipCodeTextbox().getAttribute('class');
    Promise.all([
      expect(zip).toContain('ng-valid'),
      expect(submitBtn.isEnabled()).toBe(true)]).catch(function() {
        console.error("Error");
    })
  });

});
/* ZipCode validations ends here*/


/* This test suite is for Reset button test*/
/* Reset Button Test starts here*/
describe('Reset Button Test', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('Junaid');
    page.getLastNameTextbox().sendKeys('Patel');
    page.getGenderRadioMale().click();
    page.getEmailTextbox().sendKeys('junaid.patel@cerebriai.com');
    page.getPhoneNumberTextbox().sendKeys('123-123-1234');
    page.getCityTextbox().sendKeys('Toronto');
    page.getStateTextbox().sendKeys('Ontario');
    page.getZipCodeTextbox().sendKeys('12345');
  });

  it('should clear all fields after being clicked', () => {
    page.getResetButton().click();
    Promise.all([
      expect(page.getFirstNameTextbox().getText()).toEqual(''),
      expect(page.getLastNameTextbox().getText()).toEqual(''),
      expect(page.getEmailTextbox().getText()).toEqual(''),
      expect(page.getPhoneNumberTextbox().getText()).toEqual(''),
      expect(page.getCityTextbox().getText()).toEqual(''),
      expect(page.getStateTextbox().getText()).toEqual(''),
      expect(page.getZipCodeTextbox().getText()).toEqual('')]).catch(function() {
        console.error("Error");
    })
   });
});
/* Reset Button Test ends here*/
