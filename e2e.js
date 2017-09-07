var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:3000/index/index');
driver.findElement(By.id('thumb')).click();
driver.sleep(500);
driver.findElement(By.id('thumb')).click();
driver.sleep(500);
driver.findElement(By.id('thumb')).click();
driver.sleep(500);
driver.findElement(By.id('thumb')).click();
driver.sleep(500);
driver.findElement(By.id('thumb')).click();
// driver.quit();