
// validate password
function isPasswordEqual() {
    let pw1 = document.getElementById("password1").value;
    let pw2 = document.getElementById("password2").value;
    
    return pw1 === pw2;
}

function submitProfile() {
    // get the error message element
    const errorMsg = document.getElementById("errorMsg");

    // validate the password
    if (!isPasswordEqual()) {
        errorMsg.textContent = "Confirmation password does not match the input password.";
        return;
    }

    const fields = ["disName", "email", "phone", "zipCode", "password1", "password2"];
    // update the profile
    fields.forEach(field => {
        const input = document.getElementById(field);
        let updatedValue = input.value;
        
        // mask the password for display
        if(field === "password1" || field === "password2") {
            updatedValue = updatedValue.replace(/./g, '*');
        }
        
        // update the profile
        document.getElementById(field + "_updated").textContent = updatedValue;

        // clearing all input fields
        document.getElementById(field).value='';
    });

    
    fields.forEach(field => document.getElementById(field).value = '');

    // displaying the success message
    errorMsg.textContent = "Profile Updated Successfully!";
}