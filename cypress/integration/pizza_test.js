import React from 'react'
<reference types="Cypress" />

describe("pizza app ordering form thing tessts",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/pizza")
    })
    function name(){
        return cy.get('input[name="name"]')
    }
    function size(){
        return cy.get('select')
    }
    function marinara(){
        return cy.get('input[value="marinara"]')
    }
    function bacon(){
        return cy.get('input[name="bacon"]')
    }
    function pepp(){
        return cy.get('input[name="pepperoni"]')
    }
    function submit(){
        return cy.get('.submit')
    }

    it('can order a pizza', ()=>{
        name()
            .should('exist')
            .should('have.value', "")
            .type('J')
            .should('have.value', "J")

        //Check form validation error message
        cy.contains(/your name must be two characters or longer/i).should('exist')

        //continue ordering
        name()
            .type('ohn Doe')
            .should('have.value', "John Doe")

        //check the validation error goes away
        cy.contains(/your name must be two characters or longer/i).should('not.exist')

        //continue ordering
        size()
            .select("medium")
        marinara()
            .click()
        bacon()
            .click()
        pepp()
            .click()
        submit()
            .click()

        name()
            .should('have.value', "")
    
    })
})