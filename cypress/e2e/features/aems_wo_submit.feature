Feature: AEMS Work Order submit

Background:
  Given User logs in to AEMS


@Smoke
Scenario: Verify Work order creation for reefer container
  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  Then User can cleanup work orders for reefer containers
  And User enters a reefer equipment number on Create New WorkOrder page
  And User selects shop "1VD" on the Create New WorkOrder page
  And User selects mode "43" on the Create New WorkOrder page
  And User selects a Damage code "BK" on the Create New WorkOrder page
  And User selects a Repair code "6371" on the Create New WorkOrder page
  And User selects a Repair location code "MCNN" on the Create New WorkOrder page
  And User selects a TPI code "MANUFACTURE_WARRANTY" on the Create New WorkOrder page
  Then User can view the parts being displayed on Create New WorkOrder page
  And User can select a part number "818831A" on Create New WorkOrder page
  And User enters a remark "testing" on Create new Work Order page
  Then User clicks submit work order on Create new Work Order page
  Then User can view work order successfuly created notification for reefer container
  Then User logs out of AEMS


  @Smoke
Scenario: Verify Work order creation for DRY container with attachments
  
  Then User can view details on AEMSHomepage
  When User clicks on Create New WorkOrder on AEMSHomepage
  Then User can cleanup work orders for dry containers
  And User enters a dry equipment number on Create New WorkOrder page
  And User selects shop "1VK" on the Create New WorkOrder page
  And User selects mode "03" on the Create New WorkOrder page
  When User clicks on Attachments on Create New WorkOrder page
  Then User attempts to upload a valid file on Create New WorkOrder page
  And User selects a Damage code "CU" on the Create New WorkOrder page
  And User selects a Repair code "5522" on the Create New WorkOrder page
  And User selects a Repair location code "RT00" on the Create New WorkOrder page
  And User selects a TPI code "MANUFACTURE_WARRANTY" on the Create New WorkOrder page
  And User enters a remark "testing" on Create new Work Order page
  Then User clicks submit work order on Create new Work Order page
  Then User can view work order successfuly created notification for dry container
  Then User logs out of AEMS



# @perftest
# Scenario: Verify Work order creation for DRY container with attachments
#   Given Start record  
#   Given User logs in to AEMS
#   Then User can view details on AEMSHomepage
#   When User clicks on Create New WorkOrder on AEMSHomepage
#   And User enters a dry equipment number on Create New WorkOrder page
#   And User selects shop "1VK" on the Create New WorkOrder page
#   And User selects mode "03" on the Create New WorkOrder page
#   When User clicks on Attachments on Create New WorkOrder page
#   Then User attempts to upload a valid file on Create New WorkOrder page
#   And User selects a Damage code "CU" on the Create New WorkOrder page
#   And User selects a Repair code "5522" on the Create New WorkOrder page
#   And User selects a Repair location code "RT00" on the Create New WorkOrder page
#   And User selects a TPI code "MANUFACTURE_WARRANTY" on the Create New WorkOrder page
#   And User enters a remark "testing" on Create new Work Order page
#   Then User clicks submit work order on Create new Work Order page
#   Then User can view work order successfuly created notification for dry container
#   Then User logs out of AEMS
#   Then Stop record