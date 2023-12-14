import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { GPOne } from './newUserPageObject';

describe('newUser', () => {
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

    test('Testing new user signup', async () => {
        await gp.navigate();
        await gp.setInput(gp.name, 'Dummy');
        await gp.setInput(gp.email, 'savefed751@gearstag.com');
        await sleep(1000);
        await gp.click(gp.signUpBtn);
        await gp.click(gp.title);
        await gp.setInput(gp.password, '123456');
        await sleep(1000);
        await gp.click(gp.dayAnswer); 
        await gp.click(gp.monthAnswer);
        await gp.click(gp.yearAnswer);
        await gp.click(gp.newL);
        await gp.click(gp.offers);
        await sleep(1000);
        await gp.setInput(gp.fName, 'Dom');
        await gp.setInput(gp.LName, 'Dummy');
        await sleep(1000);
        await gp.setInput(gp.address, '123 Dummy St');
        await gp.click(gp.country);
        await sleep(1000);
        await gp.setInput(gp.state, 'California'); 
        await gp.setInput(gp.city, 'Berkeley');
        await sleep(1000);
        await gp.setInput(gp.zipcode, '94701');
        await gp.setInput(gp.phone, '1234567890');
        await sleep(2000);
        await gp.click(gp.createAccountBtn);


        const accountCreated = await gp.accountCreated();
        expect(accountCreated).toBe(true);
    });
    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
