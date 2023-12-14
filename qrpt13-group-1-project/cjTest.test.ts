import {AutomationExercise} from "./cjPage";
const autoEx = new AutomationExercise();

test ('Viewing a Product, Writing a review, & Adding Item to cart', async () => {
    try{ 
   console.log("Navigating to the main Page");
   await autoEx.navigate();
   console.log("Scrolling Down");
   await autoEx.driver.executeScript("window.scrollBy(0,500);");
   console.log("Clicking on viewProduct");
   await autoEx.click(autoEx.viewProduct);
   console.log("Clicked on viewProduct successfully");
   console.log("entering name, email, and submiting review");
   await autoEx.setInput(autoEx.nameInput, "Joe");
   await autoEx.setInput(autoEx.emailInput, "JoeyBisTheMostAccurate@gmail.com");
   await autoEx.setInput(autoEx.addReview, "This item does not fit my big mooscles");
   console.log("Submitting the Review");
   await autoEx.click(autoEx.submitBtn);
   console.log("Scrolling Up");
   console.log("Adding Item to cart");
   await autoEx.click(autoEx.addToCartBtn);
   console.log("Added Item to cart Successfully");
   console.log("Quitting the driver");
   await autoEx.driver.quit();
} catch (error) {
    console.error("An error occurred:", error);

};
});

