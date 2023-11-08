
export class DashboardAssertions {
  verifyLogin() {
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
  }
}
