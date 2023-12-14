import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import { GPOne } from './pageObjectLogin';

describe('Login', () => {
    let driver: WebDriver;
    const gp = new GPOne();

    beforeAll(async () => {
        driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    });

    beforeEach(async () => {
        await driver.get('https://automationexercise.com/');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Testing login feature', async () => {
        await gp.navigate();
        await gp.login('bitoso2203@cumzle.com', '123456');

        const isLoggedIn = await gp.isLoggedIn();
        expect(isLoggedIn).toBe(true);
    });
});