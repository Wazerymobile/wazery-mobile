const products = [

    {
        name: "Samsung Galaxy A56",
        price: "18,999 جنيه",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",

        screen: "6.7 بوصة Super AMOLED",
        processor: "Exynos 1580",
        ram: "8 GB",
        storage: "256 GB",
        camera: "50 MP + 12 MP + 5 MP",
        frontCamera: "12 MP",
        battery: "5000 mAh",
        os: "Android"
    },

    {
        name: "iPhone 15",
        price: "29,999 جنيه",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=600&q=80",

        screen: "6.1 بوصة Super Retina XDR",
        processor: "Apple A16 Bionic",
        ram: "6 GB",
        storage: "128 GB",
        camera: "48 MP + 12 MP",
        frontCamera: "12 MP",
        battery: "3349 mAh",
        os: "iOS"
    },

    {
        name: "Infinix Note 50",
        price: "12,999 جنيه",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",

        screen: "6.78 بوصة AMOLED",
        processor: "MediaTek Dimensity",
        ram: "8 GB",
        storage: "256 GB",
        camera: "50 MP",
        frontCamera: "13 MP",
        battery: "5200 mAh",
        os: "Android"
    }

];


const container = document.getElementById("productsContainer");


function displayProducts(list) {

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <h3 style="text-align:center; grid-column:1/-1;">
                مفيش موبايل بالاسم ده
            </h3>
        `;

        return;
    }


    list.forEach((product, index) => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <div class="price">
                    ${product.price}
                </div>

                <button
                    class="details-btn"
                    onclick="showDetails(${index})"
                >
                    عرض المواصفات
                </button>

            </div>
        `;

        container.appendChild(card);

    });

}


function showDetails(index) {

    const product = products[index];

    document.getElementById("modalImage").src = product.image;

    document.getElementById("modalName").textContent = product.name;

    document.getElementById("modalPrice").textContent = product.price;

    document.getElementById("modalScreen").textContent = product.screen;

    document.getElementById("modalProcessor").textContent = product.processor;

    document.getElementById("modalRam").textContent = product.ram;

    document.getElementById("modalStorage").textContent = product.storage;

    document.getElementById("modalCamera").textContent = product.camera;

    document.getElementById("modalFrontCamera").textContent = product.frontCamera;

    document.getElementById("modalBattery").textContent = product.battery;

    document.getElementById("modalOS").textContent = product.os;


    document.getElementById("productModal").style.display = "block";

}


function closeModal() {

    document.getElementById("productModal").style.display = "none";

}


window.onclick = function(event) {

    const modal = document.getElementById("productModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const filtered = products.filter(product =>

        product.name
        .toLowerCase()
        .includes(search)

    );


    displayProducts(filtered);

}


displayProducts(products);