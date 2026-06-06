function addToCart(title, price, image) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        title: title,
        price: price,
        image: image
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(title + " added to cart!");
}
