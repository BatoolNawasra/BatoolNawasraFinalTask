/// <reference types="cypress" />

export class VerifyChangeStatusPageActions {
  clickButton(name: string) {
    cy.contains("button", name).click();
  }

  fillNotes(note: string) {
    cy.contains("label", "Notes")
      .parent()
      .parent()
      .find("textarea")
      .clear()
      .type("Batool Nawasra Decide to: " + note);
  }

  fillRequirdFileds() {
    cy.contains("label", "Interview Title")
      .parent()
      .parent()
      .find("input")
      .clear()
      .type("Batool Nawasra");



    cy.contains("label", "Interviewer").parent().parent().find("input").clear();

    cy.contains("label", "Interviewer").parent().parent().find("input");
    cy.contains("label", "Interviewer")
      .parent()
      .parent()
      .find("input")
      .type("a");
    cy.wait(2500);
    cy.contains("label", "Interviewer")
      .parent()
      .parent()
      .find("input")
      .type("{downArrow}");
    cy.contains("label", "Interviewer")
      .parent()
      .parent()
      .find("input")
      .type("{enter}");

      
    cy.contains("label", "Date")
      .parent()
      .parent()
      .find("input")
      .clear()
      .type("2023-12-30");
  }
}
