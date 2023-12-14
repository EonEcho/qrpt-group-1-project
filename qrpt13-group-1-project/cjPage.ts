import { By, WebDriver, Builder, Capabilities, until, WebElement} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class AutomationExercise extends BasePage {
    driver: WebDriver;
    url: string = 'https://automationexercise.com/';

    header: By = By.css('.container');
    viewProduct: By = By.xpath('//a[@href="/product_details/1"]');
    nameInput: By = By.id('name');
    emailInput: By = By.id('email');
    addReview: By = By.id('review');
    submitBtn: By = By.id('button-review');
    addToCartBtn: By = By.xpath('//button[@class="btn btn-default cart"]');
    slider1: By = By.id('slider');

    constructor(){
        super({url: 'https://automationexercise.com/'});
    };
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header));
    };
    async getElement(elementBy: By):Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy); 
        await this.driver.wait(until.elementIsVisible(element)); 
        return element; 
    };
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    };
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).getText(); 
    }; 
    async sendKeys(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys)
    };
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        await input.clear(); 
        return input.sendKeys(keys); 
    }; 
    async onScroll(elementBy: By) {
        window.scrollBy(0,30);
    };
    
};
