const sheetURL =
"https://docs.google.com/spreadsheets/d/1w0IsB84mgqm6Z_73yPCHlnZJkM6RiLVhsSK1VC-MKbM/export?format=csv&gid=0";

fetch(sheetURL)
  .then(res => res.text())
  .then(data => {

    const rows = data.trim().split("\n").slice(1);
    const grid = document.getElementById("book-grid");

    rows.forEach(row => {

      const cols = row.split(",");

      const title = cols[0]?.trim();
      const author = cols[1]?.trim();
      const category = cols[2]?.trim();
      const description = cols[3]?.trim();
      const price = cols[4]?.trim();
      const image = cols[5]?.trim();

      if (!title) return;

      const card = document.createElement("div");
      card.className = "book-card";

      card.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
        <p class="price">₹${price}</p>
        <button>Add to Cart</button>
      `;

      card.querySelector("button").addEventListener("click", () => {
        addToCart(title, Number(price), image);
      });

      grid.appendChild(card);
    });

  })
  .catch(err => console.error("Sheet load error:", err));
