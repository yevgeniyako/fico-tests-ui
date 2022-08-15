import {userOne} from '../../fixtures/data.js'

export default class ContactUsPage {


    contactUsBtn = () => cy.get('.container > .navbar-actions > .btn-primary');
    headerGetInTouch = () => cy.get('#edit-form-title').children('h5');
    firstNameField = () => cy.get('#edit-firstname');
    lastNameField = () => cy.get('#edit-lastname');
    emailField = () => cy.get('input#edit-email');
    phoneField = () => cy.get('input#edit-recentphone');
    jobTitleField = () => cy.get('input#edit-title');
    companyField = () => cy.get('input#edit-company');
    industryDropdown = () => cy.get('[data-id="edit-industry"]');
    industryDropdownList = industry => cy.get('.dropdown-item').contains(industry);
    countryDropdown = () => cy.get('[data-id="edit-country"]');
    countryDropdownList = country => cy.get('.dropdown-item').contains(country);
    stateDropdown = () => cy.get('[data-id="edit-state"]');
    stateDropdownList = state => cy.get('.dropdown-item').contains(state);
    inquiryDropdown = () => cy.get('[data-id="edit-natureinquiry"]');
    inquiryDropdownList = state => cy.get('.dropdown-item').contains(state);
    commentsField = () => cy.get('#edit-comments');
    checkboxInp = () => cy.get('[type="checkbox"]');
    submitBtn = () => cy.get('#edit-actions-submit').contains('Submit');
    headerSuccess = () => cy.get('div > div > h4');


    fillOutForm() {
        this.headerGetInTouch().should('be.visible').contains("Get in touch");
        this.firstNameField().should('be.visible').type(userOne.firstName, {force: true});
        this.lastNameField().should('be.visible').type(userOne.lastName, {force: true});
        this.emailField().should('be.visible').type(userOne.email, {force: true});
        this.phoneField().should('be.visible').type(userOne.phone, {force: true});
        this.jobTitleField().should('be.visible').type(userOne.jobTitle, {force: true});
        this.companyField().should('be.visible').type(userOne.company, {force: true});
        this.industryDropdown().click({force: true});
        this.industryDropdownList(userOne.industry).click({force: true});
        this.countryDropdown().click({force: true});
        this.countryDropdownList(userOne.country).click({force: true});
        this.stateDropdown().click({force: true});
        this.stateDropdownList(userOne.state).click({force: true});
        this.inquiryDropdown().click({force: true});
        this.inquiryDropdownList(userOne.inquiry).click({force: true});
        this.commentsField().should('be.visible').type(userOne.comments, {force: true});
        this.checkboxInp().check({force: true});
        this.submitBtn().click({force: true});
        this.headerSuccess().should('be.visible').contains("Success");
    }
}