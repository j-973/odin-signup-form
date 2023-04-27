const FORM = document.getElementById("new_user"),
    PWD_REQS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/,
    PWD = document.getElementById("pwd"),
    CONFIRM_PWD = document.getElementById("confirm_pwd"),
    MSG_INVALID = document.getElementById("msg_invalid"),
    BTN_SUBMIT = document.getElementById("submit_new_user");

    //If the password and confirm password both meet the regex requirments, and also match each other, submit the form and keep the invalid message blank, otherwise prevent form submission with preventDefault(), add the .error css rules to password inputs, and show error message
    validatePwd = (ev) => {
        if (PWD_REQS.test(PWD.value) && PWD_REQS.test(CONFIRM_PWD.value) && (PWD.value === CONFIRM_PWD.value)) {
            MSG_INVALID.textContent = ``;
            if (PWD.classList.contains(`error`) || CONFIRM_PWD.classList.contains(`error`)) {
                PWD.classList.remove(`error`);
                CONFIRM_PWD.classList.remove(`error`);
            }
            return true; 
        }
        else {
            ev.preventDefault();
            if (!PWD.classList.contains(`error`) || !CONFIRM_PWD.classList.contains(`error`)) {
                PWD.classList.add(`error`);
                CONFIRM_PWD.classList.add(`error`);
            }
            MSG_INVALID.textContent = `*Passwords must be between 8-16 characters, and contain at least 
            one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*)`;
            return false; 
        }
    }

    resetForm = (ev) => {
        if (PWD.classList.contains(`error`) || CONFIRM_PWD.classList.contains(`error`)) {
            PWD.classList.remove(`error`);
            CONFIRM_PWD.classList.remove(`error`);
        }
        PWD.value = ``;
        CONFIRM_PWD.value = ``;
        MSG_INVALID.textContent = ``;
    }

    validatePwdTyping = (ev) => {
            if (ev.target.matches('#pwd') || ev.target.matches('#confirm_pwd')) {
                validatePwd(ev);
        }
    }

    validateOnSubmit = (ev) => {
        ev.preventDefault();
        if (validatePwd(ev)) {
            FORM.submit();
        } else {
            resetForm(ev);
        }
    }

FORM.addEventListener("input", validatePwdTyping);
FORM.addEventListener("submit", validateOnSubmit);