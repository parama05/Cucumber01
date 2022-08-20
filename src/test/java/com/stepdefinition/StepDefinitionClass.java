package com.stepdefinition;


import org.junit.Assert;

import com.base.BaseClass;
import com.pojo.FacebookLogin;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinitionClass extends BaseClass{

	FacebookLogin fb;
	
	@Given("User launch Facebook Web Application")
	public void user_launch_Facebook_Web_Application() {
		
	}

	@When("User enters valid username and invalid password")
	public void user_enters_valid_username_and_invalid_password() {
		fb = new FacebookLogin();
		insertText(fb.getUsername(), "parama");
		insertText(fb.getPassword(), "12345");
	}
	

	@When("User clicks login Button")
	public void user_clicks_login_Button() {
		fb = new FacebookLogin();
		btnClick(fb.getBtnLogin());
	}

	@Then("User verify Error message is displayed")
	public void user_verify_Error_message_is_displayed() {
		fb = new FacebookLogin();
		boolean displayed = fb.getErrorMsg().isDisplayed();
		System.out.println(fb.getErrorMsg().getText());
		System.out.println(displayed);
	}
	

	@When("User clicks Create New Account Button")
	public void user_clicks_Create_New_Account_Button() {
		fb = new FacebookLogin();
		btnClick(fb.getCreateNew());
		
	}

	@Then("User verify Signup text is displayed")
	public void user_verify_Signup_text_is_displayed() throws InterruptedException {
		Thread.sleep(3000);
		fb = new FacebookLogin();
		boolean sign = fb.getSignUp().isDisplayed();
		System.out.println(fb.getSignUp().getText());
		System.out.println(sign);
	}

	@When("User enters invalid {string} and {string}")
	public void user_enters_invalid_and(String username, String password) {
		fb = new FacebookLogin();
		insertText(fb.getUsername(), username);
		insertText(fb.getPassword(), password);
		Assert.assertTrue("Fail", false);
		}

}
