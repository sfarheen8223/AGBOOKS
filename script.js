let total = 0;

function addToCart(title, price, image) {

    const cartContainer =
        document.getElementById("cart-container");

    const item = document.createElement("div");

    item.className = "cart-item";

    item.innerHTML = `
        <img src="${image}" alt="${title}">
        
        <div class="cart-details">
            <h4>${title}</h4>
            <p>₹${price}</p>
        </div>

        <button onclick="removeItem(this, ${price})">
            Remove
        </button>
    `;

    cartContainer.appendChild(item);

    total += price;

    document.getElementById("total-price")
        .innerText = "Total: ₹" + total;
}

function removeItem(button, price) {

    button.parentElement.remove();

    total -= price;

    document.getElementById("total-price")
        .innerText = "Total: ₹" + total;
}
