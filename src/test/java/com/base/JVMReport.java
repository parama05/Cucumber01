package com.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;


public class JVMReport {
	public static void generateJVMReport(String jsonfile) {
		
		File reportloc = new File("C:\\Users\\ADMIN\\eclipse-workspace\\Cucumber\\src\\test\\resources\\Results");
		
		
		Configuration configuration = new Configuration(reportloc, "Facebook Web Automation");
		
		configuration.addClassifications("PlatformName", "Windows");
		configuration.addClassifications("PlatformVersion", "11");
		configuration.addClassifications("BuildNo", "54322");
		configuration.addClassifications("Sprint", "12");
		
		List<String> jsonFiles = new ArrayList<String>();
		jsonFiles.add(jsonfile);
		
		ReportBuilder builder = new ReportBuilder(jsonFiles, configuration);
		builder.generateReports();
	}

}
