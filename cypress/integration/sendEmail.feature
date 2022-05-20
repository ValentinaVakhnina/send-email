Feature: Email

    Scenario: Send message with attachment
        Given User opens Login page aol.com
        When User enters username "vakhnina.valya@aol.com"
        And User clicks Next button
        And User enters password "Test_123456"
        And User clicks Next button
        And User "Valentina" logins

        And User navigates to Email box page
        And User opens new message form
        And User selects the first contact
        And User fills subject field by "Test subject" 
        And User fills body of message by "Test body"
        And User attaches file "image.jpg"
        And User clicks send button
        Then message is sent success

    Scenario: Logout from aol.com
        Given User clicks logOut link
        Then approve Logout form is shown
        And User approves logOut