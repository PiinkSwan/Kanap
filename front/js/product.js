var str = window.location.href;
var url = new URL (str);
var idProduct = url.searchParams.get("id")
console.log (idProduct);
let article ="";

const color = document.querySelector('#colors');
const quantity = document.querySelector('#quantity');

getArticle();

function getArticle() {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then((res) => {
        return res.json();
    })
}

