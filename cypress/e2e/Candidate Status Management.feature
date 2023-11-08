
# First Note: List of Available Vacancies
# Vacancies available on the website to be used in testing.
# Please note that these vacancies may change over time.
# Available Vacancies:
# 1. Associate IT Manager
# 2. Junior Account Assistant
# 3. Manual QA
# 4. Payroll Administrator
# 5. Sales Representative
# 6. Senior QA Lead
# 7. Senior Support Specialist
# 8. Software Engineer
# 9. TC-01 Manual QA
# 10. Python developer
# to handel this error i add new Vacancy and bulid all test over it

# Second Note: Testing Strategy
# To maximize the number of test scenarios that pass,
# we will initially exclude scenarios that move the status to "rejected" from our primary testing phase.
# these commented scenarios will be added to the test table at the end for testing.

# Note (Duplicate 1): Duplicated Scenarios
# I use duplicate scenarios because the result of a scenario is used as a precondition for more than one time in the next scenarios.
# These duplicated scenarios will be added before the actual testing to verify that no tests will fail.

# Without duplicates, there are 18 unique scenarios to cover the Candidate Status Management process.


Feature: Candidate Status Management

  Background:
    # must login and add Vacancy once but before all hook not work as expected so i repaeat every scenario

    Given The Admin logged into OrangeHRM with valid credentials
    And Navigate to Recruitment page
    And Click Vacancies Button
    And Add New Vacancy with "Batool Lead" Vacancy
    
    And Click Candidates Button
    And Filter Candidates with "Batool Lead" Vacancy only
  # you can change the Vacancy at filtering and adding cadidates but make sure there are the same Vacancy




  Scenario: Add Candidate to verify Initial Status is "Application Initiated"
    When Admin click the Add button
    And Fill Add Candidate from with "Batool Lead" Vacancy
    And Admin click the "Save" button
    Then The candidate should be in "Application Initiated" status

  Scenario: Add Candidate to verify Initial Status is "Application Initiated"(Duplicate 1)
    When Admin click the Add button
    And Fill Add Candidate from with "Batool Lead" Vacancy
    And Admin click the "Save" button
    Then The candidate should be in "Application Initiated" status

  Scenario: Add Candidate to verify Initial Status is "Application Initiated"(Duplicate 2)
    When Admin click the Add button
    And Fill Add Candidate from with "Batool Lead" Vacancy
    And Admin click the "Save" button
    Then The candidate should be in "Application Initiated" status

  Scenario: Add Candidate to verify Initial Status is "Application Initiated"(Duplicate 3)
    When Admin click the Add button
    And Fill Add Candidate from with "Batool Lead" Vacancy
    And Admin click the "Save" button
    Then The candidate should be in "Application Initiated" status

  Scenario: Add Candidate to verify Initial Status is "Application Initiated"(Duplicate 4)
    When Admin click the Add button
    And Fill Add Candidate from with "Batool Lead" Vacancy
    And Admin click the "Save" button
    Then The candidate should be in "Application Initiated" status

  Scenario: Add Candidate to verify Initial Status is "Application Initiated"(Duplicate 5)
    When Admin click the Add button
    And Fill Add Candidate from with "Batool Lead" Vacancy
    And Admin click the "Save" button
    Then The candidate should be in "Application Initiated" status

  Scenario: Add Candidate to verify Initial Status is "Application Initiated"(Duplicate 6)
    When Admin click the Add button
    And Fill Add Candidate from with "Batool Lead" Vacancy
    And Admin click the "Save" button
    Then The candidate should be in "Application Initiated" status

  Scenario: Add Candidate to verify Initial Status is "Application Initiated"(Duplicate 7)
    When Admin click the Add button
    And Fill Add Candidate from with "Batool Lead" Vacancy
    And Admin click the "Save" button
    Then The candidate should be in "Application Initiated" status



  Scenario: Move candidate from Application Initiated to Shortlisted
    Given Candidate is in "Application Initiated" status
    And Available buttons options for "Application Initiated" status
    When Admin click the "Shortlist" button navigate to page with tittle "Shortlist Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Shortlisted" status

  Scenario: Move candidate from Application Initiated to Shortlisted(Duplicate 1)
    Given Candidate is in "Application Initiated" status
    And Available buttons options for "Application Initiated" status
    When Admin click the "Shortlist" button navigate to page with tittle "Shortlist Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Shortlisted" status

  Scenario: Move candidate from Application Initiated to Shortlisted(Duplicate 2)
    Given Candidate is in "Application Initiated" status
    And Available buttons options for "Application Initiated" status
    When Admin click the "Shortlist" button navigate to page with tittle "Shortlist Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Shortlisted" status

  Scenario: Move candidate from Application Initiated to Shortlisted(Duplicate 3)
    Given Candidate is in "Application Initiated" status
    And Available buttons options for "Application Initiated" status
    When Admin click the "Shortlist" button navigate to page with tittle "Shortlist Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Shortlisted" status

  Scenario: Move candidate from Application Initiated to Shortlisted(Duplicate 4)
    Given Candidate is in "Application Initiated" status
    And Available buttons options for "Application Initiated" status
    When Admin click the "Shortlist" button navigate to page with tittle "Shortlist Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Shortlisted" status

  Scenario: Move candidate from Application Initiated to Shortlisted(Duplicate 5)
    Given Candidate is in "Application Initiated" status
    And Available buttons options for "Application Initiated" status
    When Admin click the "Shortlist" button navigate to page with tittle "Shortlist Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Shortlisted" status

  Scenario: Move candidate from Application Initiated to Shortlisted(Duplicate 6)
    Given Candidate is in "Application Initiated" status
    And Available buttons options for "Application Initiated" status
    When Admin click the "Shortlist" button navigate to page with tittle "Shortlist Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Shortlisted" status




  Scenario: Move candidate from Shortlisted to Interview Scheduled
    Given Candidate is in "Shortlisted" status
    And Available buttons options for "Shortlisted" status
    When Admin click the "Schedule Interview" button navigate to page with tittle "Schedule Interview"
    And Admin fill Interview Information
    And Admin click the "Save" button
    Then The candidate should be in "Interview Scheduled" status


  Scenario: Move candidate from Shortlisted to Interview Scheduled(Duplicate 1)
    Given Candidate is in "Shortlisted" status
    And Available buttons options for "Shortlisted" status
    When Admin click the "Schedule Interview" button navigate to page with tittle "Schedule Interview"
    And Admin fill Interview Information
    And Admin click the "Save" button
    Then The candidate should be in "Interview Scheduled" status


  Scenario: Move candidate from Shortlisted to Interview Scheduled(Duplicate 2)
    Given Candidate is in "Shortlisted" status
    And Available buttons options for "Shortlisted" status
    When Admin click the "Schedule Interview" button navigate to page with tittle "Schedule Interview"
    And Admin fill Interview Information
    And Admin click the "Save" button
    Then The candidate should be in "Interview Scheduled" status






  Scenario:Move candidate from Shortlisted to Interview Passed after first interview
    Given Candidate is in "Shortlisted" status
    And Available buttons options for "Shortlisted" status
    When Admin click the "Schedule Interview" button navigate to page with tittle "Schedule Interview"
    And Admin fill Interview Information
    And Admin click the "Save" button
    Then The candidate should be in "Interview Scheduled" status

    Given Available buttons options for "Interview Scheduled" status
    When Admin click the "Mark Interview Passed" button navigate to page with tittle "Mark Interview Passed"
    And Admin click the "Save" button
    Then The candidate should be in "Interview Passed" status
    And Available buttons options for "Interview Passed" status is "Reject, Schedule Interview, Offer Job"


  Scenario:Move candidate from Shortlisted to Interview Passed after first interview(Duplicate 1)
    Given Candidate is in "Shortlisted" status
    And Available buttons options for "Shortlisted" status
    When Admin click the "Schedule Interview" button navigate to page with tittle "Schedule Interview"
    And Admin fill Interview Information
    And Admin click the "Save" button
    Then The candidate should be in "Interview Scheduled" status

    Given Available buttons options for "Interview Scheduled" status
    When Admin click the "Mark Interview Passed" button navigate to page with tittle "Mark Interview Passed"
    And Admin click the "Save" button
    Then The candidate should be in "Interview Passed" status
    And Available buttons options for "Interview Passed" status is "Reject, Schedule Interview, Offer Job"


  Scenario:Move candidate from Shortlisted to Interview Passed after Second interview
    Given Candidate is in "Shortlisted" status
    And Available buttons options for "Shortlisted" status
    When Admin click the "Schedule Interview" button navigate to page with tittle "Schedule Interview"
    And Admin fill Interview Information
    And Admin click the "Save" button
    Then The candidate should be in "Interview Scheduled" status

    Given Available buttons options for "Interview Scheduled" status
    When Admin click the "Mark Interview Passed" button navigate to page with tittle "Mark Interview Passed"
    And Admin click the "Save" button
    Then The candidate should be in "Interview Passed" status
    And Available buttons options for "Interview Passed" status is "Reject, Schedule Interview, Offer Job"

    When Admin click the "Schedule Interview" button navigate to page with tittle "Schedule Interview"
    And Admin fill Interview Information
    And Admin click the "Save" button
    Then The candidate should be in "Interview Scheduled" status

    When Admin click the "Mark Interview Passed" button navigate to page with tittle "Mark Interview Passed"
    And Admin click the "Save" button
    Then The candidate should be in "Interview Passed" status
    And Available buttons options for "Interview Passed" status is "Reject, Offer Job"



  Scenario: Move candidate from Interview Scheduled to Interview Passed
    Given Candidate is in "Interview Scheduled" status
    And Available buttons options for "Interview Scheduled" status
    When Admin click the "Mark Interview Passed" button navigate to page with tittle "Mark Interview Passed"
    And Admin click the "Save" button
    Then The candidate should be in "Interview Passed" status


  Scenario: Move candidate from Interview Scheduled to Interview Failed
    Given Candidate is in "Interview Scheduled" status
    And Available buttons options for "Interview Scheduled" status
    When Admin click the "Mark Interview Failed" button navigate to page with tittle "Mark Interview Failed"
    And Admin click the "Save" button
    Then The candidate should be in "Interview Failed" status



  Scenario: Move candidate from Interview Passed to Offer Job
    Given Candidate is in "Interview Passed" status
    When Admin click the "Offer Job" button navigate to page with tittle "Offer Job"
    And Admin click the "Save" button
    Then The candidate should be in "Job Offered" status

  Scenario: Move candidate from Interview Passed to Offer Job(Duplicate 1)
    Given Candidate is in "Interview Passed" status
    When Admin click the "Offer Job" button navigate to page with tittle "Offer Job"
    And Admin click the "Save" button
    Then The candidate should be in "Job Offered" status

  Scenario: Move candidate from Interview Passed to Offer Job(Duplicate 2)
    Given Candidate is in "Interview Passed" status
    When Admin click the "Offer Job" button navigate to page with tittle "Offer Job"
    And Admin click the "Save" button
    Then The candidate should be in "Job Offered" status



  Scenario: Move candidate from Job Offered to Offer Declined
    Given Candidate is in "Job Offered" status
    And Available buttons options for "Job Offered" status
    When Admin click the "Offer Declined" button navigate to page with tittle "Decline Offer"
    And Admin click the "Save" button
    Then The candidate should be in "Offer Declined" status

  Scenario: Move candidate from Job Offered to Hired
    Given Candidate is in "Job Offered" status
    And Available buttons options for "Job Offered" status
    When Admin click the "Hire" button navigate to page with tittle "Hire Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Hired" status



  Scenario:Verify No further options are available for Hired
    Given Candidate is in "Hired" status
    And Available buttons options for "Hired" status
    Then The candidate have "0" future options available



  Scenario Outline: Move candidate to "Rejected" status
    Given Candidate is in "<Current Status>" status
    When Admin click the "Reject" button navigate to page with tittle "Reject Candidate"
    And Admin click the "Save" button
    Then The candidate should be in "Rejected" status

    Examples:
      | Current Status        |
      | Application Initiated |
      | Shortlisted           |
      | Interview Scheduled   |
      | Interview Failed      |
      | Interview Passed      |
      | Job Offered           |
      | Offer Declined        |



  Scenario:Verify No further options are available for Rejected
    Given Candidate is in "Rejected" status
    And Available buttons options for "Rejected" status
    Then The candidate have "0" future options available