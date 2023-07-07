const fname = document.getElementById(`fname`);
const lname = document.getElementById(`lname`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const register_btn = document.getElementById(`register-btn`);
const user_container = [];
// console.log(register_btn);

register_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let user_data = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value,
    }
    user_container.push(user_data);
    window.localStorage.setItem("data", JSON.stringify(user_container))
    window.location.assign(`login.html`);
});

































































