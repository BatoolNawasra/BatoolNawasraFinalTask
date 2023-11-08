export class AddVacancyPageActions {

  clickAddButton() {
    cy.contains("button", "Add").click();
  }
  fillNewVacancyName(name: string) {
    cy.contains("Vacancy Name")
      .parent()
      .next()
      .find("input")
      .clear()
      .type(name);
  }

  fillNewVacancyHiringManager() {
    cy.contains("label", "Hiring Manager")
      .parent()
      .parent()
      .find("input")
      .clear();

    cy.contains("label", "Hiring Manager")
      .parent()
      .parent()
      .find("input")
      .type("m");
    cy.wait(2500);

    cy.contains("label", "Hiring Manager")
      .parent()
      .parent()
      .find("input")
      .type("{downArrow}");
    cy.contains("label", "Hiring Manager")
      .parent()
      .parent()
      .find("input")
      .type("{enter}");
  }

  fillNewVacancyJobTitle() {
    cy.contains("label", "Job Title")
      .parent()
      .next()
      .find("i")
      .click()
      .wait(3000);
    cy.contains("span", "QA Engineer").click();
  }

  clickSaveButton(){
    cy.contains("button","Save").click()
  }
}
