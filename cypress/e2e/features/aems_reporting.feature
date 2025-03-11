

Feature: AEMS Reporting

"""
As a User logging in I should be able to generate a report for a shopcode and time frame

"""

Background:
  Given User logs in to AEMS


@Smoke
Scenario: Verify the user can create Reports


  Then User can view details on AEMSHomepage
  When User navigates to Reports
  Then User selects filters for report generation on AEMS Reports page
  Then User can see the report generated on AEMS Reports page
