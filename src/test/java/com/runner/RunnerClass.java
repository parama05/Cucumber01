package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.base.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features", glue = "com.stepdefinition", dryRun = false, 
plugin= {"junit:src\\test\\resources\\Results\\facebook.xml", "html:src\\test\\resources\\Results",
		"json:src\\test\\resources\\Results\\sample.json", "rerun:src\\test\\resources\\Failed.txt"})

public class RunnerClass {

	@AfterClass
	public static void afterClass() {
		JVMReport.generateJVMReport("C:\\Users\\ADMIN\\eclipse-workspace\\Cucumber\\src\\test\\resources\\Results\\sample.json");
	}
	
}