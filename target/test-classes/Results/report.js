$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/FbLogin.feature");
formatter.feature({
  "name": "Validation of login page in Facebook Web Application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Facebook Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_launch_Facebook_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_Validation of login page with valid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enters valid username and invalid password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_valid_username_and_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Facebook Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_launch_Facebook_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_Validation of Signup text",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks Create New Account Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_Create_New_Account_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify Signup text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Signup_text_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027Sign Up\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.134)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PARAMAGURU-HP\u0027, ip: \u0027192.168.11.150\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 103.0.5060.134 (8ec6fce403b..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51299}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2a3cd5cb0606555298d4d83d98d49ea1\n*** Element info: {Using\u003dxpath, value\u003d//div[text()\u003d\u0027Sign Up\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat com.stepdefinition.StepDefinitionClass.user_verify_Signup_text_is_displayed(StepDefinitionClass.java:56)\r\n\tat ✽.User verify Signup text is displayed(file:src/test/resources/Features/FbLogin.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC03_Validation of login page with multiple invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User verify Error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "9655145848",
        "12455"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Facebook Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_launch_Facebook_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_Validation of login page with multiple invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters invalid \"9655145848\" and \"12455\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_enters_invalid_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Fail\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.stepdefinition.StepDefinitionClass.user_enters_invalid_and(StepDefinitionClass.java:66)\r\n\tat ✽.User enters invalid \"9655145848\" and \"12455\"(file:src/test/resources/Features/FbLogin.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_clicks_login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_verify_Error_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});