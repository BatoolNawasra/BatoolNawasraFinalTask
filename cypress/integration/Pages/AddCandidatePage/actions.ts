/// <reference types="cypress" />

export class AddCandidatePageActions {
  fillNewCandidteEmail(email: string) {
    cy.contains("Email").parent().next().find("input").clear().type(email);
  }

  fillNewCandidteVacancy(vacancy: string) {
    cy.contains("label", "Vacancy")
      .parent()
      .next()
      .find("i")
      .click()
      .wait(3000);
    cy.contains("span", vacancy).click();
  }

  fillNewCandidteFullName(first: string, mid: string, last: string) {
    cy.contains("Full Name")
      .parent()
      .next()
      .find("input")
      .first()
      .clear()
      .type(first);

    cy.contains("Full Name")
      .parent()
      .next()
      .find("input")
      .eq(1)
      .clear()
      .type(mid);

    cy.contains("Full Name")
      .parent()
      .next()
      .find("input")
      .last()
      .clear()
      .type(last);
  }
}
