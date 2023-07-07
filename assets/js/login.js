const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const login_btn = document.getElementById(`login-btn`);
var user_container = [];

if (window.localStorage.getItem(`data`)) {
    console.log();
    user_container = JSON.parse(window.localStorage.getItem(`data`));
}
console.log(user_container);
login_btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (user_container[0].email == email.value) {
        window.location.assign(`dashboard.html`);
    } else {
        window.location.assign(`index.html`);
    }
});






