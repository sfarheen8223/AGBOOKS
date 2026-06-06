let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

const container =
document.getElementById("cart-items");

cart.forEach((book,index)=>{

    total += book.price;

    container.innerHTML += `

        <div class="cart-item">

            <img src="${book.image}">

            <div>

                <h3>${book.title}</h3>

                <p>₹${book.price}</p>

            </div>

        </div>

    `;
});

document.getElementById("grand-total")
.innerText = "Total: ₹" + total;

document
.getElementById("orderForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Order Placed Successfully!\n\n" +
        "Cash On Delivery Selected."
    );

});
