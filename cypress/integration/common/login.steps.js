import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User opens Login page aol.com', () => {
    cy.visit('https://login.aol.com/')
})

When('User enters username {string}', (username) => {
    cy.get('#login-username').type(username, { delay: 100 })
})

When('User enters password {string}', (password) => {
    cy.get('#login-passwd').type(password, { delay: 100 })
})

When('User clicks Next button', () => {
    cy.get('#login-signin').click()
})

When('User {string} logins', (user) => {
    cy.get('a.profile-button').eq(0).should('have.text', user)
})

Given('User clicks logOut link', () => {
    cy.get('.signOutLink > a').click()
})

Then('approve Logout form is shown', () => {
    cy.get('input[data-logout="yes"]').should('be.visible')
})

Then('User approves logOut', () => {
    cy.get('input[data-logout="yes"]').click()
})