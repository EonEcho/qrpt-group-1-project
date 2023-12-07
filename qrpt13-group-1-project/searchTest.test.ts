import {automationPageClass} from './automationExercisebasePage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const automationPage = new automationPageClass()


test ('searching ', async()=>{
    await automationPage.navigate()
    await automationPage.search('Saree') 
    await automationPage.click(automationPage.icon) // \n is used to hit enter after the search item is typed
    let resultText = await automationPage.getResults()
    expect (resultText).toContain('Saree')



    await fs.writeFile(`${__dirname}/productsearch.png`,
    await automationPage.driver.takeScreenshot(), "base64",   //used .driver here since it is a built in method in selenium
    (e) => {
        if (e) console.error(e)
        else console.log('Saved Succesfully')
    }
    )
   fs.writeFile(`${__dirname}/productsearchtest.txt`, resultText, (e) => {
       if (e) console.error(e)
       else console.log('saved Succesfully')
   })

})
afterAll(async () => {
   await automationPage.driver.quit()
})