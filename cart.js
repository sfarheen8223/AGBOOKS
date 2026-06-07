let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {

    const container =
    document.getElementById("cart-items");

    container.innerHTML = "";

    let total = 0;

    cart.forEach((book,index)=>{

        total += Number(book.price);

        container.innerHTML += `

        <div class="cart-item">

            <img src="${book.image}" alt="${book.title}">

            <div class="cart-details">

                <h3>${book.title}</h3>

                <p>₹${book.price}</p>

            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>

        `;
    });

    document.getElementById("grand-total")
    .innerText = "Total: ₹" + total;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();
}

renderCart();

document
.getElementById("place-order")
.addEventListener("click", function(){

    let name =
    document.getElementById("customerName").value;

    let phone =
    document.getElementById("phone").value;

    let address =
    document.getElementById("address").value;

    let books = "";

    cart.forEach(book=>{
        books +=
        `${book.title} - ₹${book.price}%0A`;
    });

    let total = cart.reduce(
        (sum,item)=>sum + Number(item.price),
        0
    );

    let message =

`AG BOOK CENTRE ORDER

Name: ${name}

Phone: ${phone}

Address:
${address}

Books:
${books}

Total: ₹${total}

Payment:
Cash On Delivery`;

    window.open(
    `https://wa.me/918977901900?text=${encodeURIComponent(message)}`
    );
});
