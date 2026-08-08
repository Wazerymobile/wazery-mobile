const products = [

    {
        name: "Samsung Galaxy A57",
        price: "29,999 جنيه",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",

        screen: " 6.7 بوصة بدقة 1080 x2340 بها ثقب صغير Super AMOLED",
        processor: " Exynos 1680 تكنولوجيا 4 نانو
",
        ram: "12 GB",
        storage: "256 GB",
        camera: "50 MP + 12 MP + 5 MP",
        frontCamera: "12 MP",
        battery: "5000 mAh",
        os: "Android"
    },

     
       {
    name: "Infinix NOTE 60 Pro",
    price: "27,500",
    image: "infinix-note-60-pro.jpg",

    screen: "6.78 بوصة AMOLED، دقة 1.5K، معدل تحديث 144Hz، سطوع يصل إلى 4500 nits، حماية Corning Gorilla Glass 7i",

    processor: "Qualcomm Snapdragon 7s Gen 4 5G",

    ram: " 12 ",

    storage: "256",

    camera: "50MP OIS Night Master + 8MP Ultra-Wide بزاوية 112°",

    frontCamera: "كاميرا أمامية — المواصفة قد تختلف حسب السوق",

    battery: "6500mAh",

    os: "XOS 16",

}
    },

    {
        name: "Infinix Note 60",
        price: "19,999 جنيه",
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
