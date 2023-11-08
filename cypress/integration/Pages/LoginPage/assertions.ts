export class LoginAssertions {

  
  verifyVisitOrangeHRMWebSite() {
    cy.get(".orangehrm-login-title").should("have.text", "Login");
  }
}
