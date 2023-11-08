export class LoginActions {
  visitOrangeHERWebsite() {
    cy.visit("https://opensource-demo.orangehrmlive.com");
   cy.wait(1500)
  }

  setUserName(userName:string) {
    cy.get('input[name="username"]').clear().type(userName);
  }

  setPassword(password:string) {
    cy.get('input[type="password"]').clear().type(password);
  }

  clickLoginButton() {
    cy.get(".orangehrm-login-button").click();
    cy.wait(1000);
  }
}
