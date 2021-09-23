/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// import configJson from '../fixtures/config.json';
import locator from '../fixtures/locators.json';

class userDashboard{
    
    dashboardCheck(){
        cy.xpath(locator['User Dashboard Screen']['user.Dashboard']);
    }
}

export default userDashboard;