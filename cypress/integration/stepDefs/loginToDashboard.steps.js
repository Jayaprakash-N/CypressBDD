/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import guestDashboardPG from "../../pageObjects/guestDashboard";
import loginPG from "../../pageObjects/login";
import userDashboardPG from "../../pageObjects/userDashboard";
import configJson from '../../fixtures/config.json';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const guestDashboard = new guestDashboardPG();
const login= new loginPG();
const userDashboard = new userDashboardPG();

Given("the user navigates to login page from guest Dashboard", () =>{
    guestDashboard.dashboardCheck();
    guestDashboard.navToLogin();
    login.loginCheck();
});

When("the user provides valid credentials and submit to Login", () =>{
    login.setUsername(configJson.email);
    login.setPassword(configJson.password);
    login.submitLogin();
});

Then("the user should see the User Dashboard",() =>{        
    userDashboard.dashboardCheck();
});

When("the user provides Invalid credentials and submit to Login", () =>{
    login.setUsername("test@gmail.com");
    login.setPassword("test");
    login.submitLogin();
});

Then("the user should see the error message in Login screen",() =>{        
    login.validateInvalidateLogin();
});