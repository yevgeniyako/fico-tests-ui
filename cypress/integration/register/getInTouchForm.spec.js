///<reference types="cypress" />;
import ContactUsPage from '../../support/page_object_model/pageObject';

const contactUsPage = new ContactUsPage();

describe('Tests for Contact us form', () => {
    describe('Tests for Contact us form for user with valid credentials - Positive Tests', () => {

        it('Precondition, visit Main page', () => {
            cy.visit('/');
        });

        it('Navigate to Contact Form', () => {
            contactUsPage.contactUsBtn().click();
            cy.url().should('include', '/en/contact-us');
        });

        it('User field Contact form', () => {
            contactUsPage.fillOutForm();
        });
    })
})