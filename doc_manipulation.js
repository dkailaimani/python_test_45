// Task 1: Array containing product information
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Function to display product information dynamically
function displayProducts() {
    let productContainer = document.getElementById("product-container");

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let productName = document.createElement("h2");
        productName.textContent = product.name;

        let productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price}`;

        let productDescription = document.createElement("p");
        productDescription.textContent = `Description: ${product.description}`;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        productContainer.appendChild(productDiv);
    });
}

// Task 3: Event listener to display products upon page load
window.addEventListener("load", displayProducts);
