package com.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

public class FacebookLogin extends BaseClass {

	public FacebookLogin() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "email")
	private WebElement username;

	@FindBy(id = "pass")
	private WebElement password;

	@FindBy(name = "login")
	private WebElement btnLogin;

	@FindBy(xpath = "//div[contains(text(),'incorrect')]")
	private WebElement ErrorMsg;

	@FindBy(xpath = "//a[contains(text(),'Create New Account')]")
	private WebElement createNew;

	@FindBy(xpath = "//div[text()='Sign Up']")
	private WebElement signUp;

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getBtnLogin() {
		return btnLogin;
	}

	public WebElement getErrorMsg() {
		return ErrorMsg;
	}

	public WebElement getCreateNew() {
		return createNew;
	}

	public WebElement getSignUp() {
		return signUp;
	}
}
