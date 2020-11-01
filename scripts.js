/* Add your JavaScript to this file */

window.onload = function() {
    buttons = document.getElementsByClassName("btn");
    formButton = buttons[1];
    formTextField = document.getElementById("email")
    message = document.getElementsByClassName("message")[0]

    formButton.addEventListener("click", function(){
        if (formTextField.value == ""){
            message.innerHTML = "Please enter a valid email address";
        }
        else{
            message.innerHTML = "Thank you! Your email address " + formTextField.value + "has been added to our mailing list!"
        }
    })
}