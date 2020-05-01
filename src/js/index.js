'use strict';

const form_sign = document.querySelector(".form-sign");
const sign_inputs = document.querySelectorAll(".form-sign__input");

const btn_submit = document.querySelector(".form-sign__button");

btn_submit.addEventListener("click", function(e){
    
    e.preventDefault();
    validateForm(sign_inputs);
  
}); 

function validateEmail(email){
    let re = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/;

    return re.test(email);
}

function checkInputIsNotEmpty(input){

    return (input.value.trim() !== "") ? false : true;
}

function checkInputState(input){
    
    if(checkInputIsNotEmpty(input)){
        return true;
    }else{
        return false;
    }
}

function validateForm(form){

    form.forEach((input) =>{
        const error_message = input.nextElementSibling;
            
        if(checkInputState(input)){
            error_message.style.display = "block";
            input.style.borderColor = "red";
        }else{

            if(input.type === "email"){
                if(!validateEmail(input.value)){
                    console.log("no es email");
                    error_message.innerHTML = "Looks like this is not an email";
                    input.style.color = "red";
                    error_message.style.display = "block";
                }else{
                    error_message.style.display = "none";
                    input.style.borderColor = "";
                }
            }else{
            error_message.style.display = "none";
            input.style.borderColor = "";
            }
        }
    });
}




