/// <reference types="cypress" />

export class VerifyChangeStatusPageAssertions {
  verifyNavigateToPageWithTittle(pageExpectedTittle:string){
    cy.wait(500)
    cy.get(".orangehrm-main-title").should("have.text",pageExpectedTittle)
  }
   
  verifySuccessfullyUpdatedMessageAppear(){
  cy.contains("p","Successfully updated").should("be.visible")
  }



}


