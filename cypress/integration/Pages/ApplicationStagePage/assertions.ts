/// <reference types="cypress" />

export class ApplicaionStagePageAssertions {
  private buttonStatuses: { [key: string]: string[] } = {
    "Application Initiated": ["Reject", "Shortlist"],
    Shortlisted: ["Reject", "Schedule Interview"],
    "Interview Scheduled": [
      "Reject",
      "Mark Interview Failed",
      "Mark Interview Passed",
    ],
    "Interview Failed": ["Reject"],
    "Interview Passed": ["Reject", "Schedule Interview", "Offer Job"],
    "Job Offered": ["Reject", "Offer Declined", "Hire"],
    "Offer Declined": ["Reject"],
    Rejected: [],
    Hired: [],
  };

  verifyButtonsAvilableToStatus(
    expectedStatus: string,
    expectedButtonNames?: string[]
  ) {
    const buttonsToCheck =
      expectedButtonNames || this.buttonStatuses[expectedStatus];
    cy.get(".orangehrm-recruitment-actions");

    if (buttonsToCheck.length === 0) {
      // Handle the case where there are no expected buttons
      // For example, you can log a message or perform some other action
      cy.log(`No buttons expected for status: ${expectedStatus}`);
      cy.get(".orangehrm-recruitment-actions")
        .find("button")
        .should("not.exist");
    } else {
      cy.get(".orangehrm-recruitment-actions")
        .find("button")
        .should("have.length", buttonsToCheck.length);

      cy.get(".orangehrm-recruitment-actions")
        .find("button")

        .each(($button, index) => {
          const buttonName = Cypress.$($button).text().trim();
          if (index < buttonsToCheck.length) {
            cy.wrap(buttonName).should("eq", buttonsToCheck[index]);
          } else {
            cy.log(
              "The number of buttons is true, but not with the expected names or order"
            );
          }
        });
    }
  }

  verifyStatusEqual(expectedStatus: string) {
    cy.get(".oxd-text--subtitle-2")
      .invoke("text")
      .then((actualStatus) => {
        expect(actualStatus.trim()).to.equal("Status: " + expectedStatus);
      });
  }

  verifyNumberOfButtonsAvilable(num: number) {
    cy.get(".orangehrm-recruitment-actions")
      .find("button")
      .should("have.length", num);
  }
}
