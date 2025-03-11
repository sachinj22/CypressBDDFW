Feature: AEMS WO Attachments

Background:
  Given User logs in to AEMS


 @Smoke
Scenario: Verify if the user can attach valid file types

  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a valid equipment number on Create New WorkOrder page
  Then User can view all details of the Create New WorkOrder page
  When User clicks on Attachments on Create New WorkOrder page
  Then User attempts to upload a valid file on Create New WorkOrder page
  And User can see the uploaded file on Create new WorkOrder page

 @Smoke
Scenario: Verify if the user cannot attach files larger than 5MB in Attachments

  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a valid equipment number on Create New WorkOrder page
  Then User can view all details of the Create New WorkOrder page
  When User clicks on Attachments on Create New WorkOrder page
  Then User attempts to upload a file larger than 5MB
  And User can see a error message related to file size on Create new WorkOrder page

 @Smoke
Scenario: Verify if the user cannot attach more than 5 files in attachments

  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a valid equipment number on Create New WorkOrder page
  Then User can view all details of the Create New WorkOrder page
  When User clicks on Attachments on Create New WorkOrder page
  Then User attempts to upload more than 5 files on Create New WorkOrder page
  And User can see a error message related to allowed file number on Create new WorkOrder page


 @Smoke
Scenario: Verify if the user cannot attach duplicate files

  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a valid equipment number on Create New WorkOrder page
  Then User can view all details of the Create New WorkOrder page
  When User clicks on Attachments on Create New WorkOrder page
  Then User attempts to upload duplicate files
  And User can see a error message related to duplicate files on Create new WorkOrder page

   @Smoke
Scenario: Verify if the user cannot attach invalid file types

  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a valid equipment number on Create New WorkOrder page
  Then User can view all details of the Create New WorkOrder page
  When User clicks on Attachments on Create New WorkOrder page
  Then User attempts to upload invalid file type
  And User can see a error message related to invalid file type on Create new WorkOrder page