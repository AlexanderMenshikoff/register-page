const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

const signInBtnMain = document.querySelector('.btn-signin')
const phoneInput = document.querySelector('.input-phone')
const passwordSignInInput = document.querySelector('.input-password-signin')

const signUpBtnMain = document.querySelector('.btn-signup')
const phoneSignInInput = document.querySelector('.input-phone-signin')
const passwordInput = document.querySelector('.input-password')
const passwordInputRepeat = document.querySelector('.input-password-repeat')


signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});


document.addEventListener("DOMContentLoaded", function () {
    let eventCallback = function (e) {
        let el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    let phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCallback);
        }
    }

});

signUpBtnMain.addEventListener('click', () => {
    if(!phoneInput.value || !passwordInput.value || !passwordInputRepeat.value ){
        return alert('Данные не заполнены')
    }
    
    if(passwordInput.value === passwordInputRepeat.value){
        localStorage.phoneNumber = phoneInput.value
        localStorage.password = passwordInput.value
        phoneInput.value = ''
        passwordInput.value = ''
        passwordInputRepeat.value = ''
        console.log(localStorage.phoneNumber)
        console.log(localStorage.password)
    }
    else {
        alert('Пароли не совпадают!')
        phoneInput.value = ''
        passwordInput.value = ''
        passwordInputRepeat.value = ''
    }
})


signInBtnMain.addEventListener('click', () => {
    if(!phoneSignInInput.value || !passwordSignInInput.value){
        alert('Данные не заполнены!')
        phoneSignInInput.value = ''
        passwordSignInInput.value = ''
    }
    else{
        phoneSignInInput.value = ''
        passwordSignInInput.value = ''
    }
})