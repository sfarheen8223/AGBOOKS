let cart = [];

function addToCart(bookName) {
    cart.push(bookName);

    const cartList = document.getElementById('cart-list');
    const emptyCart = document.getElementById('empty-cart');

    emptyCart.style.display = 'none';

    const li = document.createElement('li');
    li.textContent = bookName + ' added to cart';

    cartList.appendChild(li);

    alert(bookName + ' added to cart successfully!');
}
