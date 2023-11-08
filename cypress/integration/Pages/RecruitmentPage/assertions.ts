export class RecruitmentAssertions {
  verifytitleRecruitment(){
    cy.contains("h6","Recruitment").should("be.visible")
  }  
}
