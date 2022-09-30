import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('exemplo dado', () => {
    cy.log('ESCREVE DADO')
});

When('exemplo quando', () => {
    cy.log('ESCREVE QUANDO')
});

Then('exemplo então', () => {
    cy.log('ESCREVE ENTÃO')    
});
