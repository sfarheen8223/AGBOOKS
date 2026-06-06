function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartCount() {

    let cart = getCart();

    let count =
        document.getElementById("cart-count");

    if(count){
        count.innerText = cart.length;
    }
}

function addToCart(title, price, image) {

    let cart = getCart();

    cart.push({
        title,
        price,
        image
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(title + " added to cart");
}

updateCartCount();function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartCount() {

    let cart = getCart();

    let count =
        document.getElementById("cart-count");

    if(count){
        count.innerText = cart.length;
    }
}

function addToCart(title, price, image) {

    let cart = getCart();

    cart.push({
        title,
        price,
        image
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(title + " added to cart");
}

updateCartCount();
