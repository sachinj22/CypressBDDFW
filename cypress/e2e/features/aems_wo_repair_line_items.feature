Feature: AEMS Repair Line items

Background:
  Given User logs in to AEMS

@Smoke
Scenario: Verify if a shop user can login to AEMS , select Shop , Mode , Damage code , repair code , repair location code TPI code of choice and View the Item total
  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a valid equipment number on Create New WorkOrder page
  And User selects shop "1JB" on the Create New WorkOrder page
  And User selects mode "03" on the Create New WorkOrder page
  And User selects a Damage code "BR" on the Create New WorkOrder page
  And User selects a Repair code "1117" on the Create New WorkOrder page
  And User selects a Repair location code "RT00" on the Create New WorkOrder page
  And User selects a TPI code "MANUFACTURE_WARRANTY" on the Create New WorkOrder page
  Then User can view the Item total value based on Pcs and Material cost per pc on Create New WorkOrder page
  Then User logs out of AEMS

@Smoke
Scenario: Verify if a shop user can login to AEMS , select Shop , Mode , Damage code , repair code 
  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User enters a valid equipment number on Create New WorkOrder page
  And User selects shop "1JB" on the Create New WorkOrder page
  And User selects mode "03" on the Create New WorkOrder page
  And User selects a Damage code "CH" on the Create New WorkOrder page
  And User selects a Repair code "2112" on the Create New WorkOrder page
  And User selects a Repair location code "RT01" on the Create New WorkOrder page
  And User selects a TPI code "MANUFACTURE_WARRANTY" on the Create New WorkOrder page
  Then User logs out of AEMS

  @Smoke
Scenario: Verify if 3rd party input is displayed after Cause is selected as Confirmed Third Party 
  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  And User selects Confirmed Third party as Cause
  Then User can veiw 3rd Party Port input box


  # @Smoke
  # Scenario: Verify that a shop user cannot use repair codes starting 2 for a reefer container for THERMOKING OEM
  # Then User can view details on AEMSHomepage
  # When User clicks on Create New WorkOrder on AEMSHomepage
  # And User enters a equipment number of type Thermoking on Create New WorkOrder page
  # And User selects shop "1VK" on the Create New WorkOrder page
  # And User selects mode "43" on the Create New WorkOrder page
  # And User selects a Damage code "BK" on the Create New WorkOrder page
  # And User types a Repair code "2111" on the Create New WorkOrder page
  # And User can view error message related to repair code not applicable on the Create New WorkOrder page
  # Then User logs out of AEMS

# # Needs to be reimplemented
# Scenario: Verify that a shop user can use a repair code(starts with 2 of Diakin)  for a reefer Equipment of type DIAKIN
  
#   Then User can view details on AEMSHomepage
#   When User clicks on Create New WorkOrder on AEMSHomepage
#   And User enters a equipment number of type Diakin on Create New WorkOrder page
#   And User selects shop "1JB" on the Create New WorkOrder page
#   And User selects mode "03" on the Create New WorkOrder page
#   And User selects a Damage code "BT" on the Create New WorkOrder page
#   And User selects a Repair code "2111" on the Create New WorkOrder page
#   And User cannot view any error message related to repair code not applicable for diakin on the Create New WorkOrder page
#   Then User logs out of AEMS


#  # Needs to be reimplemented
# Scenario: Verify that a shop user cannot use a repair code(starts with 1 of Starcool) for a reefer Equipment of type DIAKIN
  
#   Then User can view details on AEMSHomepage
#   When User clicks on Create New WorkOrder on AEMSHomepage
#   And User enters a equipment number of type Diakin on Create New WorkOrder page
#   And User selects shop "1JB" on the Create New WorkOrder page
#   And User selects mode "03" on the Create New WorkOrder page
#   And User selects a Damage code "BT" on the Create New WorkOrder page
#   And User selects a Repair code "1116" on the Create New WorkOrder page
#   And User can view a error message related to repair code not applicable for diakin on the Create New WorkOrder page
#   Then User logs out of AEMS

# # Needs to be reimplemented
# Scenario: Verify that a shop user cannot use a repair code(starts with 6) of Thermo King TNE508 / CRR40 / Magnum for a reefer Equipment of type DIAKIN
  
#   Then User can view details on AEMSHomepage
#   When User clicks on Create New WorkOrder on AEMSHomepage
#   And User enters a equipment number of type Diakin on Create New WorkOrder page
#   And User selects shop "1JB" on the Create New WorkOrder page
#   And User selects mode "03" on the Create New WorkOrder page
#   And User selects a Damage code "BT" on the Create New WorkOrder page
#   And User selects a Repair code "6627" on the Create New WorkOrder page
#   And User can view a error message related to repair code not applicable for diakin on the Create New WorkOrder page
#   Then User logs out of AEMS

# # Needs to be reimplemented
# Scenario: Verify that a shop user cannot use a repair code(starts with 5) of type Carrier for a reefer Equipment of type DIAKIN
  
#   Then User can view details on AEMSHomepage
#   When User clicks on Create New WorkOrder on AEMSHomepage
#   And User enters a equipment number of type Diakin on Create New WorkOrder page
#   And User selects shop "1JB" on the Create New WorkOrder page
#   And User selects mode "03" on the Create New WorkOrder page
#   And User selects a Damage code "BT" on the Create New WorkOrder page
#   And User selects a Repair code "5522" on the Create New WorkOrder page
#   And User can view a error message related to repair code not applicable for diakin on the Create New WorkOrder page
#   Then User logs out of AEMS

