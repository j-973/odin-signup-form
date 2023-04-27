const FORM = document.getElementById("new_user"),
    PWD_REQS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/,
    PWD = document.getElementById("pwd"),
    CONFIRM_PWD = document.getElementById("confirm_pwd"),
    MSG_INVALID = document.getElementById("msg_invalid"),
    BTN_SUBMIT = document.getElementById("submit_new_user");

    //if the password entered matches the regex pattern, and the password and confirm password inputs match, return true.
    //error class for invalid passwords turns the password boxes red
    //green class is for valid passwords, turns valid, matching passwords green
    validatePwd = (ev) => {
        if (PWD_REQS.test(PWD.value) && PWD_REQS.test(CONFIRM_PWD.value) && (PWD.value === CONFIRM_PWD.value)) {
            MSG_INVALID.textContent = ``;
            if (PWD.classList.contains(`error`) || CONFIRM_PWD.classList.contains(`error`)) {
                PWD.classList.remove(`error`);
                CONFIRM_PWD.classList.remove(`error`);
            }
            if (!PWD.classList.contains(`green`) || !CONFIRM_PWD.classList.contains(`green`)) {
                PWD.classList.add(`green`);
                CONFIRM_PWD.classList.add(`green`);
            return true; 
        }
    }
        else {
            ev.preventDefault();
            if (PWD.classList.contains(`green`) || CONFIRM_PWD.classList.contains(`green`)) {
                PWD.classList.remove(`green`);
                CONFIRM_PWD.classList.remove(`green`);
            }
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
        PWD.className = '';
        CONFIRM_PWD.className = '';
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