 
Feature: AEMS Bulk WO
 
"""
As a User logging in I should be able to navigate to Bulk WO screen and submit Bulk WO creation request
 
User should not be able to use redelivery containers
 
"""
 
Background:
  Given User logs in to AEMS
 
 
@Smoke
Scenario: Verify the user can use Bulk Work order screen to create Bulk WO for more than 1 equipments
 
 
  Then User can view details on AEMSHomepage
  Then User cleans up data for Bulk WO creation
  When User navigates to Bulk WO page
  Then User selects shop '1VD' from Bulk WO page
  Then User selects Mode '43' from Bulk WO page
  And User enters equipment numbers 'MCAU6024920' and 'MCAU6025232' on Bulk WO page
  And User selects a Damage code "CU" on the Create New WorkOrder page
  And User selects a Repair code "0915" on the Create New WorkOrder page
  And User selects a Repair location code "MCNN" on the Create New WorkOrder page
  And User selects a TPI code "MANUFACTURE_WARRANTY" on the Create New WorkOrder page
  And User enters a remark "testing" on Create new Work Order page
  Then User clicks submit on a Create Bulk WO page
 

@Smoke
Scenario: Verify the user cannot use redelivery containers in Bulk WO screen
 
 
  Then User can view details on AEMSHomepage
  When User navigates to Bulk WO page
  Then User selects shop '1VD' from Bulk WO page
  Then User selects Mode '03' from Bulk WO page
  And User enters a redelivery equipment number on Bulk WO page
  Then User can see a error message related to redelivery on Bulk WO page 