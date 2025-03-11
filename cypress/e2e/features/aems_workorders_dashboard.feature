

Feature: AEMS Work Orders Dashboard



Background:
  Given User logs in to AEMS


@Smoke
Scenario: Verify if a user can search with a equipment number on Work orders page


  Then User can view details on AEMSHomepage
  When User enters "500000002" as equipment number on AEMSHomepage
  Then User can see results based on equipment number search
  Then User logs out of AEMS
  

#   @Smoke
# Scenario: Verify if a user can search with a equipment number on Work orders page based on Quick filters


#   Then User can view details on AEMSHomepage
#   When User selects a Quick filter status on AEMSHomepage
#   Then User can see results based on Quick filter status 
#   Then User logs out of AEMS
 