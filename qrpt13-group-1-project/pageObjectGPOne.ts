import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class GPOne extends BasePage {
  
    signUp: By = By.xpath("//a[contains(@href,'login')]");
    email: By = By.name('email');
    password: By = By.name('password');
    loginBtn: By = By.xpath('//button[@data-qa="login-button"]');
    loggedIn: By = By.xpath('//*[contains(text(), "Logged in as")]');

    constructor() {
        super({ url: 'https://automationexercise.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.signUp).click();
    };
    async login(email: string, password: string) {
        await this.driver.findElement(this.email).sendKeys(email);
        await this.driver.findElement(this.password).sendKeys(password);
        await this.driver.findElement(this.loginBtn).click();
    };
    
    async isLoggedIn(): Promise<boolean> {
        const loggedIn = await this.driver.findElements(this.loggedIn);
        return loggedIn.length > 0;
    };
};