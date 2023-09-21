const productDescription = document.querySelector("#product-description");
const productDetail = document.querySelector("#product-detail");
const productGuide = document.querySelector("#product-guide");
const productComment = document.querySelector("#product-comments");
const textPanel = document.querySelector("#text-panel");

productDescription.onclick = function () {
    productDescription.classList.toggle('active');
    textPanel.innerHTML = productDescription.dataset.text;
}

productDetail.onclick = function () {
    textPanel.innerHTML = productDetail.dataset.text;
}

productComment.onclick = function () {
    textPanel.innerHTML = productComment.dataset.text;
}

productGuide.onclick = function () {
    textPanel.innerHTML = productGuide.dataset.text;
}

window.onload = function () {
    productDescription.classList.toggle('active');
    textPanel.innerHTML = productDescription.dataset.text;
}