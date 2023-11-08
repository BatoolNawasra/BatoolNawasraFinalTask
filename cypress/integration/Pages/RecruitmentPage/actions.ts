export class RecruitmentPageActions {
  visitCandidatProfileWithStaus(status: string) {
    cy.contains("div", status).parent().next().find("button").first().click();
    cy.wait(1000);
  }

  clickCandidatesButton() {
    cy.contains("li", "Candidates").click();
  }

  clickSearchButton() {
    cy.contains("button", "Search").click();
  }

  clickAddButton() {
    cy.contains("button", "Add").click();
  }

  filterCandidatesWithVacancy(Vacancy:string){
    cy.contains("label", "Vacancy")
      .parent()
      .next()
      .find("i")
      .click()
      .wait(3000);

    cy.contains("span", Vacancy).click();
  }
}
