/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import configJson from '../fixtures/config.json';
import locator from '../fixtures/locators.json';

class login{
    
    loginCheck(){
        cy.xpath(locator['Login Screen']['login.title']);
    }

    setUsername(email){
        cy.xpath(locator['Login Screen']['login.username']).first().type(email, {force: true});
    }

    setPassword(password){
        cy.xpath(locator['Login Screen']['login.password']).type(password, {force: true});
    }

    submitLogin(){
        cy.xpath(locator['Login Screen']['login.loginBtn']).click({force: true});
    }

    validateInvalidateLogin(){
        cy.xpath(locator['Login Screen']['login.invalidCreds']);
    }

}

export default login;