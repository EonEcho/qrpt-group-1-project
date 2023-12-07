import {automationPageClass} from './automationExercisebasePage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const automationPage = new automationPageClass()


test ('category ', async()=>{
    await automationPage.navigate()
    await automationPage.click(automationPage.plusIcon)
    
    let resultText = await automationPage.getResultsCategory()
    expect (resultText).toContain("DRESS\nTOPS\nSAREE")
    



    await fs.writeFile(`${__dirname}/category.png`,
    await automationPage.driver.takeScreenshot(), "base64",   //used .driver here since it is a built in method in selenium
    (e) => {
        if (e) console.error(e)
        else console.log('Saved Succesfully')
    }
    )
   fs.writeFile(`${__dirname}/category.txt`, resultText, (e) => {
       if (e) console.error(e)
       else console.log('saved Succesfully')
   })

})
afterAll(async () => {
   await automationPage.driver.quit()
})