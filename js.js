let psw1input = document.getElementById('password');
let psw2input = document.getElementById("confirmpassword");
psw1input.addEventListener("keyup", validatePw);
psw2input.addEventListener('keyup', validatePw)
function validatePw(){
    let psw1input = document.getElementById("password");
    let psw1 = document.getElementById("password").value;
    let psw2 = document.getElementById("confirmpassword").value;
    if (psw1 !== psw2){
        psw1input.classList.add("invalid");
        psw2input.classList.add('invalid')
    } else if (psw1 == psw2){
        psw1input.classList.remove("invalid")
        psw2input.classList.remove('invalid')
    }
}