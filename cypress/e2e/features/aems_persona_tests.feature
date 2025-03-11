Feature: AEMS Persona based tests


  

@Smoke
Scenario Outline: Verify if the User can login to AEMS and veiw Create new Work Order based on User type 
  """
    All users cannot create a Work Order
    Shop user -> can create work order ie rcmautomation
    Admin user -> can create work order ie admin_user
    Approver user -> cannot create work order ie gsc_user
    Manager user -> cannot create work order ie manager_user
    Specialist user -> cannot create work order ie specialist_user
  """  
 
  Given "<User>" logs in to AEMS
  Then "<User>" can view Create new workorder feature on AEMS Homepage based on usertype

  Examples:
      | User | 
      |rcmautomation|
      |gsc_user |
      |admin_user|
      |manager_user |
      |specialist_user | 


 