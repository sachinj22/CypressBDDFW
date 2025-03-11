

Feature: AEMS Modes filtering

"""
Rule1 : Ownership type: "VSA", "SO"  Validation error -  not allowed

Rule 2: isTaggedForRedelivery is TRUE , Show only 8X modes TEST0000204

Rule 3: OwnerShip type : Maersk owned ie OWN and disposed[isactive=false] and show only modes related to disposed 22,23,26,49,70   TEST0000205

"""

Background:
  Given User logs in to AEMS


@Smoke
Scenario: Verify if a shop user can login to AEMS and enter a equipment number of ownership type VSA and view an error message


  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a equipment number where ownershiptype is VSA on Create New WorkOrder page
  Then User can view a error related to equipment type  
  Then User logs out of AEMS

  
@Smoke
Scenario: Verify if user enters a Open container that is redelivered , only mode 85 is displayed

  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a equipment number which is open and redelivered on Create New WorkOrder page
  And User selects shop "88E" on the Create New WorkOrder page
  Then User can only view mode 85 on Create New WorkOrder page
  Then User logs out of AEMS

@Smoke
Scenario: Verify if user enters a Reefer container that is redelivered , only mode 82 is displayed


  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a reefer container that is redelivered on Create New WorkOrder page
  And User selects shop "88E" on the Create New WorkOrder page
  Then User can only view mode 82 on Create New WorkOrder page
  Then User logs out of AEMS  


@Smoke
Scenario: Verify if user enters a DRY container that is redelivered , only mode 83 is displayed


  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a dry container that is redelivered on Create New WorkOrder page
  And User selects shop "88E" on the Create New WorkOrder page
  Then User can only view mode 83 on Create New WorkOrder page
  Then User logs out of AEMS  

#   @Smoke
# Scenario: Verify if user enters a DRY container that is Maersk Owned and inactive , only mode 23,70 is displayed


#   Then User can view details on AEMSHomepage
#   When User clicks on Create New WorkOrder on AEMSHomepage
#   And User enters a dry container that is Maersk owned and inactive on Create New WorkOrder page
#   Then User can only view modes 23 and 70 on Create New WorkOrder page
#   Then User logs out of AEMS  


  