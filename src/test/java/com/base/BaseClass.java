package com.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver driver;
	public void launchBrowser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		
	}
	public void maxiWindow() {
		driver.manage().window().maximize();
	}
	
	public void loadUrl(String Url) {
		driver.get(Url);
	}
	
	public void insertText(WebElement element, String text) {
		element.sendKeys(text);
	}
	
	public void btnClick(WebElement element) {
		element.click();
	}
	
	public String currentURL() {
		return driver.getCurrentUrl();
	}
	
	public String getText(WebElement element) {
		return element.getText();
	}
	
	
	public void quitBrowser() {
		driver.quit();
	}

}
