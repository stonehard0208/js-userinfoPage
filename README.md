# js-userinfoPage
# Dynamic Page
## Main Page
The main page will contain the user's feed. The feed consists of all of the user's posted articles along with all of the articles of the users that they are following. In this assignment we make a web page that displays a semi-static feed. The dynamic aspect is that the images in the articles will periodically change.

## Profile Page
The profile page will allow the user to update their profile. The account name and date of birth cannot be changed. Do not use a form for this page. The page should contain the following:

display name
email address
phone number
zipcode
password
password confirmation
Update button to submit the changes
Link to return to main page
For each field there should be an input along side the current value, e.g., something like this

Zip Code: 
77005
The page will load with hardcoded values for each field. The submit button will determine which fields have changed and provide a message to the user informing which fields are being updated. After the message is displayed, the updated values are displayed instead of the old values and the input fields should all be cleared. Be sure to validate the inputs (and perform password match) and inform the user of incorrect entries before updating values on the screen. The password should not be publicly visible on the profile page. Replace each character in the password with a '*' when you display the password
