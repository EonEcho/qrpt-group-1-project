import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class automationPageClass extends BasePage {
   




    
    //womensnames: Array<string>;
    //womensnames:string[] = new Array(2) 
    //cat1Text:string[] = new Array(2)
    //mensnames:string[] = new Array(1) 
    //cat2Text:string[] = new Array(1)
    //kidsnames:string[] = new Array(1) 
    //cat3Text:string[] = new Array(2)
     
    womenDress: By = By.xpath(('(//a[text()="Dress "])[1]'))
    womenTop:By = By.xpath('(//a[text()="Tops "])[1]')
    womenSaree: By= By.xpath('(//a[text()="Saree "])[1]')

    menTshirt:By = By.xpath('(//a[text()="Tshirts "])[1]')
    menJeans:By = By.xpath('(//a[text()="Jeans "])[1]')


    kidDress:By = By.xpath('(//a[text()="Dress "])[2]')
    kidTS: By = By.xpath('(//a[text()="Tops & Shirts "])[1]')



    cartBlue: By = By.xpath('(//a[text()="Blue Top"])[1]')
    cartMenTs: By = By.xpath('(//a[text()="Men Tshirt"])[1]')
    cartWintertop:By = By.xpath('(//a[text()="Winter Top"])[1]')
    cartSleeveless: By = By.xpath('(//a[text()="Sleeveless Dress"])[1]')

    products: string[] = [];
    searchBar: By = By.id('search_product'); 
    icon: By = By.id('submit_search')
    results: By = By.css('.features_items'); 
    plusIcon1: By = By.xpath('(//i[@class="fa fa-plus"])[1]');
    plusIcon2:By = By.xpath('(//i[@class="fa fa-plus"])[2]')
    plusIcon3:By = By.xpath('(//i[@class="fa fa-plus"])[3]')
    categoryResults1: By = By.xpath(' (//div[@class="panel-body"])[1]');
    categoryResults2: By = By.xpath(' (//div[@class="panel-body"])[2]');
    categoryResults3: By = By.xpath(' (//div[@class="panel-body"])[3]');
    subInput: By = By.id('susbscribe_email')
    subBtn: By = By.id('subscribe')
    subText:By = By.id('success-subscribe')

    //addTocart: By = By.className('btn btn-default add-to-cart')
    nameInput: By = By.name('name')
    emailInput:By = By.name('email')
    subjectInput: By = By.name('subjet')
    msgInput: By = By.name('message')
    sbmtBtn: By = By.name('submit')
    submissionmsg:By = By.className('status alert alert-success')


    firstPdt :By = By.xpath('(//a[@class="btn btn-default add-to-cart"])[1]')
    secondPdt :By =By.xpath('(//a[@class="btn btn-default add-to-cart"])[3]')
    thirdPdt:By = By.xpath('(//a[@class="btn btn-default add-to-cart"])[5]')
    fourthPdt:By = By.xpath('(//a[@class="btn btn-default add-to-cart"])[7]')
    viewCart :By =By.xpath('(//p[@class="text-center"])[2]')
    contShop: By = By.xpath('(//button[@class="btn btn-success close-modal btn-block"])[1]')
    productResults:By = By.id('#cart_info_table')

     




    constructor(){
        super({url: 'https://automationexercise.com/products'}); 
    }; 
    async search(searchThing: string) {
        return this.setInput(this.searchBar, `${searchThing}\n`);
    }; 
    async getResults() {
        return this.getText(this.results)
    }; 
    

    async getViewCart() {
        let products= await this.getText(this.productResults);
        return products;
     }; 

    

};
