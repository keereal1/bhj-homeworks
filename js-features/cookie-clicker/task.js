let counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = function () {
    cookie.width = ++counter.textContent % 2 ? 300 : 200;
}
