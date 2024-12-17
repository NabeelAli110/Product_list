let products = [
    { id: 1, name: "Product 1", price: "$20", description: "This is Product 1" },
    { id: 2, name: "Product 2", price: "$35", description: "This is Product 2" },
    { id: 3, name: "Product 3", price: "$50", description: "This is Product 3" },
    { id: 4, name: "Product 4", price: "$25", description: "This is Product 4" },
];


function renderProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    products.map((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p>${product.description}</p>
            <button class="delete-btn" data-id="${product.id}">Delete</button>
        `;

        container.appendChild(productCard);
    });

    addDeleteListeners();
}

function addDeleteListeners() {
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productId = parseInt(event.target.dataset.id); 
            products = products.filter((product) => product.id !== productId);


            renderProducts();
        });
    });
}

renderProducts();