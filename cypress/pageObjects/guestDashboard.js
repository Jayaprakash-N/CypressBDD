/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import configJson from '../fixtures/config.json';
import locator from '../fixtures/locators.json';

beforeEach(()=>{
    cy.visit(configJson.url);
});

class guestDashboard{
    
    dashboardCheck(){
        cy.xpath(locator['Guest Dashboard Screen']['guest.title']);
    }

    navToLogin(){
        cy.xpath(locator['Guest Dashboard Screen']['guest.login']).click();
    }
}

export default guestDashboard;
