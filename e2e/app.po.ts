import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h4')).getText();
  }

  getForm(){
    return element(by.css('#testForm'));
  }

  getFirstNameTextbox() {
    return element(by.name('firstName'));
  }

  getLastNameTextbox() {
    return element(by.name('lastName'));
  }

  getGenderRadioMale() {
    return element(by.css('#male'));
  }
  
  getGenderRadioFemale() {
    return element(by.css('#female'));
  }

  getEmailTextbox() {
    return element(by.name('email'));
  }

  getPhoneNumberTextbox() {
    return element(by.name('phone'));
  }

  getCityTextbox() {
    return element(by.name('city'));
  }

  getStateTextbox() {
    return element(by.name('state'));
  }

  getZipCodeTextbox() {
    return element(by.name('zipcode'));
  }

  getResetButton() {
    return element(by.css('#reset'));
   }

  getSubmitButton() {
    return element(by.css('#submit'));
  }

  getErrorFirstNameMin3() {
    return element(by.css('#errorFirstNameMin3'));
  }

  getErrorFirstNameReq(){
    return element(by.css('#errorFirstNameReq'));
  }

  getErrorFirstNameMax20(){
    return element(by.css('#errorFirstNameMax20'));
  }
  
  getErrorLastNameMin3() {
    return element(by.css('#errorLastNameMin3'));
  }

  getErrorLastNameReq(){
    return element(by.css('#errorLastNameReq'));
  }

  getErrorLastNameMax20(){
    return element(by.css('#errorLastNameMax20'));
  }

  getErrorGenderReq(){
    return element(by.css('#errorGenderReq'));
  }
  
  getErrorEmailReq() {
    return element(by.css('#errorEmailReq'));
  }

  getErrorEmailFormat(){
    return element(by.css('#errorEmailFormat'));
  }

  getErrorPhoneReq() {
    return element(by.css('#errorPhoneReq'));
  }

  getErrorPhoneFormat(){
    return element(by.css('#errorPhoneFormat'));
  }

  getErrorCityReq() {
    return element(by.css('#errorCityReq'));
  }

  getErrorCityAlpha(){
    return element(by.css('#errorCityAlpha'));
  }

  getErrorCityMin3() {
    return element(by.css('#errorCityMin3'));
  }

  getErrorCityMax20(){
    return element(by.css('#errorCityMax20'));
  }

  getErrorStateReq() {
    return element(by.css('#errorStateReq'));
  }

  getErrorStateAlpha(){
    return element(by.css('#errorStateAlpha'));
  }

  getErrorStateMin3() {
    return element(by.css('#errorStateMin3'));
  }

  getErrorStateMax20(){
    return element(by.css('#errorStateMax20'));
  }

  getErrorZipReq() {
    return element(by.css('#errorZipReq'));
  }

  getErrorZipMin5(){
    return element(by.css('#errorZipMin5'));
  }

  getErrorZipMax5() {
    return element(by.css('#errorZipMax5'));
  }

  getErrorZipOnlyDigits(){
    return element(by.css('#errorZipOnlyDigits'));
  }

}
