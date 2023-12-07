import {automationPageClass} from './automationExercisebasePage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const automationPage = new automationPageClass()


test ('subscription ', async()=>{
    await automationPage.driver.get('https://automationexercise.com/contact_us')
    await automationPage.setInput(automationPage.nameInput,'Athira')
    await automationPage.setInput(automationPage.emailInput,'test@gmail.com')
    await automationPage.setInput(automationPage.subInput,'Automation')
    await automationPage.setInput(automationPage.msgInput,'Automation exercise')
    await automationPage.click(automationPage.sbmtBtn) 
    automationPage.driver.switchTo().alert().accept();
    let resultText = await automationPage.getText(automationPage.submissionmsg)
    expect (resultText).toBe('Success! Your details have been submitted successfully.')


    await fs.writeFile(`${__dirname}/contactform.png`,
    await automationPage.driver.takeScreenshot(), "base64",   //used .driver here since it is a built in method in selenium
    (e) => {
        if (e) console.error(e)
        else console.log('Saved Succesfully')
    }
    )
   fs.writeFile(`${__dirname}/contactform.txt`, resultText, (e) => {
       if (e) console.error(e)
       else console.log('saved Succesfully')
   })

   
})
afterAll(async () => {
   await automationPage.driver.quit()
})