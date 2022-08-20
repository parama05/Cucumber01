package com.stepdefinition;

import io.cucumber.java.Before;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.base.BaseClass;

public class Hooks extends BaseClass {

	@Before
	public void beforeExecution() {
		launchBrowser();
		maxiWindow();
		loadUrl("https://www.facebook.com/");
	}

	@After
	public void afterExecution(Scenario sc) {
		TakesScreenshot tk = (TakesScreenshot) driver;
		byte[] bs = tk.getScreenshotAs(OutputType.BYTES);
		sc.embed(bs, "image/png");
		
		driver.quit();
	}
}
