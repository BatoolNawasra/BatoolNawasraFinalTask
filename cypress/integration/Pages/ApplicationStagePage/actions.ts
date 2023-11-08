/// <reference types="cypress" />

export class ApplicaionStagePageActions {
 
  clickButton(name: string) {
    cy.contains("button", name).click();
    cy.wait(1000);

    
  }

 
}
