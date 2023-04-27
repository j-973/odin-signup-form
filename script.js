const PWD_REQS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/;
    PWD = document.getElementById("pwd"),
    CONFIRM_PWD = document.getElementById("confirm_pwd"),
    MSG_INVALID = document.getElementById("msg_invalid"),
    BTN_SUBMIT = document.getElementById("submit_new_user");

    //if the value of the user-entered password is valid (sticks to the regex rules), then the invalid message stays blank, and return true. Otherwise, prevent the default behavior of submitting the form for the button, change the error text and return false;
    checkPwd = (ev) => {
        if (PWD_REQS.test(PWD.value)) {
            MSG_INVALID.textContent = ``;
            return true; 
        }
        else {
            ev.preventDefault();
            if (!PWD.classList.contains(`error`) || !CONFIRM_PWD.classList.contains(`error`)) {
                PWD.classList.add(`error`);
                CONFIRM_PWD.classList.add(`error`);
            }
            MSG_INVALID.textContent = `*Passwords must be between 8-16 characters, and contain at least 
            one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*)`
            return false; 
        }
    }

BTN_SUBMIT.addEventListener("click", checkPwd);