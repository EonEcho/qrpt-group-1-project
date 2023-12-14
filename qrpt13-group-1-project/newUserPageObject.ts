import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class GPOne extends BasePage {
  
    signUp: By = By.xpath("//a[contains(@href,'login')]");
    name: By = By.xpath('//input[@data-qa="signup-name"]');
    email: By = By.xpath('//input[@data-qa="signup-email"]');
    loginBtn: By = By.xpath('//button[@data-qa="login-button"]');
    loggedIn: By = By.xpath('//*[contains(text(), "Logged in as")]');
    signUpBtn: By = By.xpath('//button[@data-qa="signup-button"]');
    title: By = By.id('id_gender2');
    password: By = By.id('password');
    DOBdays: By = By.id('days');
    DOBmonth: By = By.id('uniform-months');
    DOByear: By = By.id('uniform-years');
    newL: By = By.id('newsletter');
    offers: By = By.id('optin');
    fName: By = By.id('first_name');
    LName: By = By.id('last_name');
    address: By = By.id('address1');
    country: By = By.xpath('//*[@id="country"]/option[2]');
    state: By = By.id('state');
    city: By = By.id('city');
    zipcode: By = By.id('zipcode');
    phone: By = By.id('mobile_number');
    createAccountBtn: By = By.xpath('//button[@data-qa="create-account"]');
    accountC: By = By.xpath('//h2[@data-qa="account-created"]');
    continueBtn: By = By.xpath('//a[@data-qa="continue-button"]');
    dayAnswer: By = By.xpath("//select[@data-qa='days']/option[@value='1']");
    monthAnswer: By = By.xpath('//*[@id="months"]/option[2]');
    yearAnswer: By = By.xpath('//*[@id="years"]/option[25]');

    constructor() {
        super({ url: 'https://automationexercise.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.signUp).click();
    };
    async newUser(name: string, email: string,loginBtn: string, signUpBtn: string, title: string, password: string, DOBdays: number, DOBmonth: string, DOByear: number, newL: string, offers: string, fName: string,
    LName: string, address: string, country: string, state: string, city: string, zipcode: number, phone: number, createAccountBtn: string, dayAnswer:string, monthAnswer: string, yearAnswer: string) {
        await this.driver.findElement(this.name).sendKeys(name);
        await this.driver.findElement(this.email).sendKeys(email);
        await this.driver.findElement(this.signUpBtn).click();
        await this.driver.findElement(this.title).click();
        await this.driver.findElement(this.password).sendKeys(password);
        await this.driver.findElement(this.DOBdays).sendKeys(dayAnswer);
        await this.driver.findElement(this.DOBmonth).sendKeys(monthAnswer);
        await this.driver.findElement(this.DOByear).sendKeys(yearAnswer);
        await this.driver.findElement(this.newL).click();
        await this.driver.findElement(this.offers).click();
        await this.driver.findElement(this.fName).sendKeys(fName);
        await this.driver.findElement(this.LName).sendKeys(LName);
        await this.driver.findElement(this.address).sendKeys(address);
        await this.driver.findElement(this.country).sendKeys(country);
        await this.driver.findElement(this.state).sendKeys(state);
        await this.driver.findElement(this.city).sendKeys(city);
        await this.driver.findElement(this.zipcode).sendKeys(zipcode);
        await this.driver.findElement(this.phone).sendKeys(phone);
        await this.driver.findElement(this.createAccountBtn).click();
    };
    

    
    async accountCreated(): Promise<boolean> {
        const accountC = await this.driver.findElements(this.accountC);
        return accountC.length > 0;
    };
};