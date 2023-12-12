import {automationPageClass} from './automationExercisebasePage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const automationPage = new automationPageClass()
let resulttext: any[]=[];





test ('removing', async()=>{
    await automationPage.navigate()
    await automationPage.click(automationPage.firstPdt)
    await automationPage.click(automationPage.contShop)
    //automationPage.timeout(5000)
    await automationPage.click(automationPage.secondPdt)
    await automationPage.click(automationPage.contShop)
     //automationPage.timeout(5000)
    await automationPage.click(automationPage.thirdPdt)
    await automationPage.click(automationPage.contShop)
     //automationPage.timeout(5000)
    await automationPage.click(automationPage.fourthPdt)

     //automationPage.timeout(5000)

    
    
    await automationPage.click(automationPage.viewCart)
    let Cart1= await automationPage.getText(automationPage.cartBlue)
    expect(Cart1).toContain('Blue Top')

    let Cart2 = await automationPage.getText(automationPage.cartMenTs)
    expect(Cart2).toContain('Men Tshirt')

   let Cart3 = await automationPage.getText(automationPage.cartSleeveless)
    expect(Cart3).toContain('Sleeveless Dress')

    let Cart4 = await automationPage.getText(automationPage.cartStylishdress)
    expect(Cart4).toContain('Stylish Dress')


    await automationPage.click(automationPage.cartDel1)
    expect(automationPage.cartTable).not.toContain('Blue Top')

    await automationPage.click(automationPage.cartDel1)
    expect(automationPage.cartTable).not.toContain('Men Tshirt')

    await automationPage.click(automationPage.cartDel1)
    expect(automationPage.cartTable).not.toContain('Sleeveless Dress')


    //await automationPage.click(automationPage.cartDel1)
    //expect(automationPage.cartTable).not.toContain('Stylish Dress')

    

    



    //
     //automationPage.timeout(5000)
     
    //let resulttext= await automationPage.getViewCart()
   
    //expect (resulttext).toContain("Blue Top\nMen Tshirt\nWinter Top\nSleeveless Dress")
    //console.log (resulttext)


    //await automationPage.search('Saree') 
    //await automationPage.click(automationPage.icon) // \n is used to hit enter after the search item is typed
    //let resultText = await automationPage.getResults()
    //expect (resultText).toContain('Saree')



    

})

afterAll(async () => {
   await automationPage.driver.quit()
})