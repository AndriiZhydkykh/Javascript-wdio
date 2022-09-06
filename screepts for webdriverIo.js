//1- click random Link
async clickSetDateGame() {
    let allDays = [];
    //get randomDateday() { return $$('[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day"]');} it's this.randomDateday()
    //find all days link and put on array allDays
    for (const positions of await this.randomDateday) {
        allDays.push(await positions) 
    }
    //get one random link
    let randLink = ~~(Math.random()*allDays.length)| 0;
    //save one random link
    let randomLinkValue=allDays[randLink];
    await randomLinkValue.click();
    await this.enterTimeGame.waitForClickable({ timeout: 40000 });
}
	
//2 - Add random email
async setMailInput (value) {
    await this.headerMailInput.waitForEnabled(5000)
    await this.headerMailInput.addValue(Math.random().toString(36).substring(2,10)+"@gmail.com");
}
// -add random Name
async setUsername (value) {
    await this.usernameInput.setValue(Math.random().toString(36).substring(2,8)+"12AbA");
}
//if can not click anything
async clickTohHeaderProductButton() {
    get hHheaderProductButton() { return $('[href="/marketplace"]') } 
    browser.executeAsync("arguments[0].click();",await this.hHheaderProductButton); 
    await browser.pause(3000)
    }

// used this script in wdio.config to mobile testing
browserName: 'chrome',
        "goog:chromeOptions":{
            mobileEmulation : { "deviceName": "Nexus 5" } ,
            args:[
                '--no-sandbox',
                '--disable-gpu',
                '--start-fullscreen',
                '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'
            ]
        },