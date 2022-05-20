import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User navigates to Email box page', () => {
    cy.get('.mail-link > a').should('be.visible').invoke('removeAttr', 'target').click()
})

When('User opens new message form', () => {
    cy.get('div.composeBtn').click()
})

When('User selects the first contact', () => {
    cy.get('div.toField').find('div.csIcon').click()
    cy.wait(1000)
    cy.get('div.dojoxGrid-scrollbox').as('clientsBox').should('be.visible')
    cy.get('@clientsBox').find('.dojoxGrid-row .dojoxGrid-cell').eq(0).click()
    cy.get('#toInputField').click()
})

When('User fills subject field by {string}', (subjectMessage) => {
    cy.get('input.subject').type(subjectMessage)
})

When('User fills body of message by {string}', (bodyMessage) => {
    cy.get('div[name="composeMessage_body_body"]').type(bodyMessage)  
})

When('User attaches file {string}', (image) => {
    cy.get('[type="file"]').eq(0).attachFile(image)
    cy.get('div.attachmentContainer').should('contain.text', image)  
})

When('User clicks send button', () => {
    cy.get('.containerNode').find('.sendButton').eq(0).click()
})

When('message is sent success', () => {
    cy.get('span.confirmMessage').should('be.visible').and('have.text', 'Your message has been sent!')
})