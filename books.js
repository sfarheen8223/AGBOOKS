const sheetURL =
"https://docs.google.com/spreadsheets/d/1w0IsB84mgqm6Z_73yPCHlnZJkM6RiLVhsSK1VC-MKbM/edit?gid=0#gid=0";

fetch(sheetURL)
  .then(response => response.text())
  .then(csv => {

    const rows = csv.trim().split("\n").slice(1);

    const grid = document.getElementById("book-grid");

    rows.forEach(row => {

      const cols = row.split(",");

      const title = cols[0];
      const author = cols[1];
      const category = cols[2];
      const description = cols[3];
      const price = cols[4];
      const image = cols[5];

      grid.innerHTML += `
        <div class="book-card">

          <img src="${image}" alt="${title}">

          <h3>${title}</h3>

          <p><strong>Author:</strong> ${author}</p>

          <p><strong>Category:</strong> ${category}</p>

          <p>${description}</p>

          <p class="price">₹${price}</p>

          <button onclick="addToCart(
            '${title}',
            ${price},
            '${image}'
          )">
            Add to Cart
          </button>

        </div>
      `;
    });

  });
