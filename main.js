let list = document.getElementById('header__nav_list');
let openList = document.getElementById('openList');
let closeTriangle = document.getElementById('header__nav_closedList');
let openTriangle = document.getElementById('header__nav_openedList');

openList.onclick = function () {
    list.style.display = "block";
    closeTriangle.style.display = "none"
    openTriangle.style.display = "block"
}

function closeList() {
    list.style.display = "none";
    openTriangle.style.display = "none"
    closeTriangle.style.display = "block"
}

let infoRectangleRight = document.getElementById('hedgehogInfoRectangleRight');
let infoTriangleRight = document.getElementById('hedgehogInfoTriangleRight');

let infoRectangleLeft = document.getElementById('hedgehogInfoRectangleLeft');
let infoTriangleLeft = document.getElementById('hedgehogInfoTriangleLeft');

let openInfoLeft = document.getElementById('openInfoLeft');
let openInfoRight = document.getElementById('openInfoRight');

openInfoLeft.onclick = function () {
    infoRectangleLeft.style.display = "flex";
    infoTriangleLeft.style.display = "block";
}

openInfoRight.onmouseover = function () {
    infoRectangleRight.style.display = "flex";
    infoTriangleRight.style.display = "block";
}

openInfoRight.onmouseout = function () {
    infoRectangleRight.style.display = "none";
    infoTriangleRight.style.display = "none";
}

openInfoLeft.onmouseover = function () {
    infoRectangleLeft.style.display = "flex";
    infoTriangleLeft.style.display = "block";
}

openInfoLeft.onmouseout = function () {
    infoRectangleLeft.style.display = "none";
    infoTriangleLeft.style.display = "none";
}