Feature: AEMS Login

Background:
  Given User logs in to AEMS

@Smoke
Scenario: Verify if the User can login to AEMS and view the Create new WorkOrder Page , User should be able to view the container details once the container number is entered
  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a valid equipment number on Create New WorkOrder page
  Then User can view all details of the Create New WorkOrder page
  Then User can view container details on Create New WorkOrder page

  @Smoke
Scenario: Verify if the User can login to AEMS and view the Create new WorkOrder Page , User should not be able to view the container details if an invalid container number is entered

  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a invalid equipment number on Create New WorkOrder page
  Then User can view an error message on Create New WorkOrder page