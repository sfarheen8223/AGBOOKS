let total = 0;

function addToCart(title, price, image){

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        title:title,
        price:price,
        image:image
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(title + " added to cart!");
}

function removeItem(button, price) {

    button.parentElement.remove();

    total -= price;

    document.getElementById("total-price").innerText =
        "Total: ₹" + total;
}
