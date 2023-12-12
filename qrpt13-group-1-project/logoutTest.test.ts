import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { GPOne } from './logoutPageObject';

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
    

    test('Testing login and logout', async () => {
        await gp.navigate();
        await gp.login('bitoso2203@cumzle.com', '123456');

        const isLoggedIn = await gp.isLoggedIn();
        expect(isLoggedIn).toBe(true);

        await gp.logout();
        
        const isLoggedOut = !(await gp.isLoggedIn());
        expect(isLoggedOut).toBe(true);
    });
});
