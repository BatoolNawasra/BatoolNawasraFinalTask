//before all hook to login once  but not work as expected
// the expected is for the secand to last test i want to navigate to candidate page only
//and then run the Scenarios but 
//the actual :need to relogin before every test 
// before(() => {
//   loginActions.visitOrangeHERWebsite();
//   loginActions.setUserName("Admin");
//   loginActions.setPassword("admin123");
//   loginActions.clickLoginButton();
//   dashboardActions.navigateToRecruitmentPage();
// }); 
//

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { LoginActions } from "../../integration/Pages/LoginPage/actions";
import { DashboardActions } from "../../integration/Pages/DashboardPage/actions";
import { ApplicaionStagePageActions } from "../../integration/Pages/ApplicationStagePage/actions";
import { ApplicaionStagePageAssertions } from "../../integration/Pages/ApplicationStagePage/assertions";
import { VerifyChangeStatusPageAssertions } from "../../integration/Pages/VerifyChangeStatusPage/assertions";
import { VerifyChangeStatusPageActions } from "../../integration/Pages/VerifyChangeStatusPage/actions";
import { RecruitmentPageActions } from "../../integration/Pages/RecruitmentPage/actions";
import { AddCandidatePageActions } from "../../integration/Pages/AddCandidatePage/actions";

const loginActions = new LoginActions();
const dashboardActions = new DashboardActions();
const applicaionStagePageActions = new ApplicaionStagePageActions();
const recruitmentPageActions = new RecruitmentPageActions();
const applicaionStagePageAssertions = new ApplicaionStagePageAssertions();
const verifyChangeStatusPageAssertions = new VerifyChangeStatusPageAssertions();
const verifyChangeStatusPageActions = new VerifyChangeStatusPageActions();
const addCandidatePageActions = new AddCandidatePageActions();

Given("The Admin logged into OrangeHRM with valid credentials", () => {
  loginActions.visitOrangeHERWebsite();
  loginActions.setUserName("Admin");
  loginActions.setPassword("admin123");
  loginActions.clickLoginButton();
});

Given("Navigate to Recruitment page", () => {
  dashboardActions.navigateToRecruitmentPage();
});

Given("Click Candidates Button", () => {
  recruitmentPageActions.clickCandidatesButton();
});

Given(
  "Filter Candidates with {string} Vacancy only",
  function (Vacancy: string) {
    recruitmentPageActions.filterCandidatesWithVacancy(Vacancy);
    recruitmentPageActions.clickSearchButton();
  }
);

Given("Candidate is in {string} status", function (currentStatus: string) {
  cy.wait(3000); //wait for all cndidates in Candidates Grid to be loaded
  recruitmentPageActions.visitCandidatProfileWithStaus(currentStatus);
  applicaionStagePageAssertions.verifyStatusEqual(currentStatus);
});

Given(
  "Available buttons options for {string} status",
  function (currentStatus: string) {
    applicaionStagePageAssertions.verifyButtonsAvilableToStatus(currentStatus);
  }
);

When(
  "Admin click the {string} button navigate to page with tittle {string}",
  function (button: string, page: string) {
    applicaionStagePageActions.clickButton(button);
    verifyChangeStatusPageAssertions.verifyNavigateToPageWithTittle(page);
    verifyChangeStatusPageActions.fillNotes(page);
  }
);

When("Admin click the {string} button", function (button: string) {
  verifyChangeStatusPageActions.clickButton(button);
  cy.wait(1000);
});

When("Admin fill Interview Information", () => {
  verifyChangeStatusPageActions.fillRequirdFileds();
});

When("Admin click the Add button", () => {
  recruitmentPageActions.clickAddButton();
});

When("Fill Add Candidate from with {string} Vacancy", (vacancy: string) => {
  addCandidatePageActions.fillNewCandidteEmail("batool2001nawasra@gmail.com");
  addCandidatePageActions.fillNewCandidteFullName("Batool", "Emad", "Nawasra");
  addCandidatePageActions.fillNewCandidteVacancy(vacancy);
});

Then(
  "The candidate should be in {string} status",
  function (expectedStatus: string) {
    cy.wait(2000);
    applicaionStagePageAssertions.verifyStatusEqual(expectedStatus);
  }
);

Then(
  "The candidate have {string} future options available",
  (numberOfOptionsStr: string) => {
    const numberOfOptions = parseInt(numberOfOptionsStr, 10);
    applicaionStagePageAssertions.verifyNumberOfButtonsAvilable(
      numberOfOptions
    );
  }
);

Then(
  "Available buttons options for {string} status is {string}",
  function (expectedStatus: string, expectedButtonNamesStr: string) {
    const expectedButtonNames = expectedButtonNamesStr
      .split(",")
      .map((name) => name.trim());

    applicaionStagePageAssertions.verifyButtonsAvilableToStatus(
      expectedStatus,
      expectedButtonNames
    );
  }
);
