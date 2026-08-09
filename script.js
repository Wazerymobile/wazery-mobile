const products = [

    {
        name: "Infinix NOTE 60 Pro",
        price: "27,000 جنيه",
        image: "infinix-note-60-pro.jpg",

        screen: "6.78 بوصة AMOLED، دقة 1.5K، معدل تحديث 144Hz، سطوع يصل إلى 4500 nits، حماية Gorilla Glass 7i",
        processor: "Qualcomm Snapdragon 7s Gen 4 5G",
        ram: "12",
        storage: "256",
        camera: "50MP OIS Night Master + 8MP Ultra-Wide بزاوية 112°",
        frontCamera: "20",
        battery: "6500mAh",
        os: "XOS 16"
    },
    {
        name: "Infinix NOTE 60 ",
        price: "20,000 جنيه",
        image: "infinix-note-60.jpg",

        screen: "6.78 بوصة AMOLED، دقة 1.5K، معدل تحديث 144Hz، سطوع يصل إلى 4500 nits، حماية Gorilla Glass 7i",
        processor: "D 7,400 5G",
        ram: "8",
        storage: "256",
        camera: "50MP Night Master + 8MP Ultra-Wide  ",
        frontCamera: "13",
        battery: "6150mAh",
        os: "XOS 16"
    },
    {
        name: "Samsung Galaxy A57 5G",
        price: "30,000 جنيه",
        image: "samsung-a57.jpg",

        screen: "6.7 بوصة Super AMOLED Plus، دقة FHD+، معدل تحديث 120Hz",
        processor: "معالج ثماني النواة حتى 2.9GHz",
        ram: "8GB / 12GB حسب الإصدار",
        storage: "256GB",
        camera: "50MP رئيسية + 12MP Ultra-Wide + 5MP، مع OIS",
        frontCamera: "12MP",
        battery: "5000mAh",
        os: "Android"
    },

    {
        name: "Redmi Note 15 5G",
        price: "15,000 جنيه",
        image: "redmi-note-15-5g.jpg",

        screen: "6.77 بوصة AMOLED، دقة 2392×1080، معدل تحديث 120Hz، سطوع يصل إلى 3200 nits",
        processor: "Qualcomm Snapdragon 6 Gen 3، تصنيع 4nm، ثماني النواة حتى 2.4GHz",
        ram: "6GB / 8GB / 12GB حسب الإصدار",
        storage: "128GB / 256GB / 512GB حسب الإصدار",
        camera: "108MP رئيسية + 8MP Ultra-Wide",
        frontCamera: "20MP",
        battery: "5520mAh",
        os: "Xiaomi HyperOS 2"
    },

    {
        name: "Samsung Galaxy S26 Ultra",
        price: "75,000 جنيه",
        image: "samsung-s26-ultra.jpg",

        screen: "6.9 بوصة Dynamic AMOLED 2X، شاشة عالية الدقة ومعدل تحديث متكيف",
        processor: "معالج Snapdragon مخصص لسلسلة Galaxy حسب السوق",
        ram: "12GB / 16GB حسب الإصدار",
        storage: "256GB / 512GB / 1TB",
        camera: "200MP رئيسية + 50MP Ultra-Wide + عدسات Telephoto",
        frontCamera: "12MP",
        battery: "5000mAh",
        os: "Android"
    }

];


// ==============================
// عرض المنتجات
// ==============================

const container = document.getElementById("productsContainer");


function displayProducts(list) {

    if (!container) {
        console.error("لم يتم العثور على productsContainer");
        return;
    }

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div style="
                width:100%;
                text-align:center;
                padding:40px;
                font-size:20px;
            ">
                لا يوجد موبايل بهذا الاسم
            </div>
        `;

        return;
    }


    list.forEach((product) => {

        const index = products.indexOf(product);

        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.style.display='none'"
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


// ==============================
// عرض تفاصيل الموبايل
// ==============================

function showDetails(index) {

    const product = products[index];

    if (!product) {
        return;
    }


    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalPrice = document.getElementById("modalPrice");
    const modalScreen = document.getElementById("modalScreen");
    const modalProcessor = document.getElementById("modalProcessor");
    const modalRam = document.getElementById("modalRam");
    const modalStorage = document.getElementById("modalStorage");
    const modalCamera = document.getElementById("modalCamera");
    const modalFrontCamera = document.getElementById("modalFrontCamera");
    const modalBattery = document.getElementById("modalBattery");
    const modalOS = document.getElementById("modalOS");
    const productModal = document.getElementById("productModal");


    if (modalImage) {
        modalImage.src = product.image;
    }

    if (modalName) {
        modalName.textContent = product.name;
    }

    if (modalPrice) {
        modalPrice.textContent = product.price;
    }

    if (modalScreen) {
        modalScreen.textContent = product.screen;
    }

    if (modalProcessor) {
        modalProcessor.textContent = product.processor;
    }

    if (modalRam) {
        modalRam.textContent = product.ram;
    }

    if (modalStorage) {
        modalStorage.textContent = product.storage;
    }

    if (modalCamera) {
        modalCamera.textContent = product.camera;
    }

    if (modalFrontCamera) {
        modalFrontCamera.textContent = product.frontCamera;
    }

    if (modalBattery) {
        modalBattery.textContent = product.battery;
    }

    if (modalOS) {
        modalOS.textContent = product.os;
    }


    if (productModal) {
        productModal.style.display = "block";
    }

}


// ==============================
// إغلاق نافذة المواصفات
// ==============================

function closeModal() {

    const modal = document.getElementById("productModal");

    if (modal) {
        modal.style.display = "none";
    }

}


// ==============================
// إغلاق النافذة عند الضغط خارجها
// ==============================

window.addEventListener("click", function(event) {

    const modal = document.getElementById("productModal");

    if (modal && event.target === modal) {

        modal.style.display = "none";

    }

});


// ==============================
// البحث عن الموبايلات
// ==============================

function searchProducts() {

    const input = document.getElementById("searchInput");

    if (!input) {
        displayProducts(products);
        return;
    }


    const searchText = input.value
        .toLowerCase()
        .trim();


    if (searchText === "") {

        displayProducts(products);

        return;
    }


    const filteredProducts = products.filter(product =>

        product.name
            .toLowerCase()
            .includes(searchText)

    );


    displayProducts(filteredProducts);

}

displayProducts(products);
