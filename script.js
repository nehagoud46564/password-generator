const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "~`!@#$%^&*()_-+=|\{[}]:;'<,>.?/";
let ii = document.getElementById('inp');
const all = cap + num + small + symbol;
let a = document.querySelector('.gbtn');
let b = document.getElementById('c')
function fun1() {
    let password = cap[Math.floor((cap.length) * (Math.random()))] + small[Math.floor((small.length) * (Math.random()))] + num[Math.floor((num.length) * (Math.random()))] + symbol[Math.floor((symbol.length) * (Math.random()))];
    for (let i = 1; i <= 8; i++) {
        password = password + all[Math.floor((all.length) * (Math.random()))];
    }
    ii.value = password;
}
function fun2() {
    if (ii.value === "") {
        alert("Password is not generated");

    }
    ii.select();
    document.execCommand("copy");


}
a.addEventListener('click', fun1);
b.addEventListener('click', fun2);