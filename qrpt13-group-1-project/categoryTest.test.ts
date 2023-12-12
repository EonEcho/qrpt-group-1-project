import {automationPageClass} from './automationExercisebasePage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const automationPage = new automationPageClass()



test ('womenscategory ', async()=>{
    await automationPage.navigate()
    await automationPage.click(automationPage.plusIcon1)
    
    let Wd = await automationPage.getText(automationPage.womenDress)
    expect(Wd).toContain('DRESS')

    let Wt = await automationPage.getText(automationPage.womenTop)
    expect(Wt).toContain('TOP')

    let Ws = await automationPage.getText(automationPage.womenSaree)
    expect(Ws).toContain('SAREE')


})




test ('menscategory ', async()=>{
    await automationPage.navigate()
    await automationPage.click(automationPage.plusIcon2)
    
    let Mt = await automationPage.getText(automationPage.menTshirt)
    expect(Mt).toContain('TSHIRTS')

    let Mj = await automationPage.getText(automationPage.menJeans)
    expect(Mj).toContain('JEANS')

    


})



test ('kidscategory ', async()=>{
    await automationPage.navigate()
    await automationPage.click(automationPage.plusIcon3)
    
    let Kd = await automationPage.getText(automationPage.kidDress)
    expect(Kd).toContain('DRESS')

    let Kt = await automationPage.getText(automationPage.kidTS)
    expect(Kt).toContain('TOPS & SHIRTS')

    


})
afterAll(async () => {
   await automationPage.driver.quit()
})








