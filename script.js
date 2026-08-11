const products = [

    {
        name: "Infinix NOTE 60 Pro",
        price: "27,000 جنيه",
        image: "Note-60-Pro.jpg",

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
        image: "Note-60.jpg",

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
        name: "Infinix Hot 70",
        price: " حسب النسخة يختلف السعر",
        image: "Hot70.jpg",
         image: "Infinix-Hot-70-Colors.jpg",

        screen: "6.78 بوصة بدقة 720x1576 بها ثقب",
        processor: " ثماني النواة Helio G100 ULT تكنولوجيا 6 نانو",
        ram: "8GB / 6GB /4 حسب الإصدار",
        storage: "256GB /128 ",
        camera: " مزدوجة 50+2 م.ب",
        frontCamera: "8MP",
        battery: "5600mAh",
        os: "Android"
    },
    {
        name: "Samsung Galaxy 07",
        price: " حسب النسخة يختلف السعر",
        image: "A07.jpg",

        screen: "6.7 بوصة بدقة 720x1600 بها نوتش",
        processor: "معالج ثماني النواة Helio G99 تكنولوجيا 6 نانو",
        ram: "8GB / 6GB /4 حسب الإصدار",
        storage: "256GB /128 /64",
        camera: " مزدوجة 50+2 م.ب",
        frontCamera: "8MP",
        battery: "5000mAh",
        os: "Android"
    },
    {
        name: "Samsung Galaxy A57 5G",
        price: "30,000 جنيه",
        image: "A57.jpg",

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
        name: " Redmi A7",
        price: "6,200 جنيه",
        image: "Redmi-A7.jpg",

        screen: "6.88 بوصة بدقة 720x1640 بكسل بها نوتش",
        processor: "Unisoc T7250 تكنولوجيا 12 نانو",
        ram: "3GB ",
        storage: "64GB",
        camera: "13 MP",
        frontCamera: "8MP",
        battery: "5200mAh",
        os: "Android"
    },

    {
        name: "Redmi Note 15 5G",
        price: "15,000 جنيه",
        image: "Note-15.jpg",

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
        name: "Oppo Reno 16",
        price: " 40000",
        image: "oppo-reno16.purpel.jpg",

        screen: "6.78 بوصة بدقة 720x1576 بها ثقب",
        processor: " Qualcomm Snapdragon 7 Gen 4 ثماني النواة 4 نانو ",
        ram: "12GB",
        storage: "256GB ",
        camera: " (Ultra-wide): 50 MP +(Wide): 50 MP + (Telephoto): 50 MP ",
        frontCamera: "50 MP",
        battery: "6700mAh",
        os: "Android"
    },

    {
        name: "Samsung Galaxy S26 Ultra",
        price: "75,000 جنيه",
        image: "26Ultra.jpg",

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

                <button
                    class="compare-btn"
                    onclick="addToCompare(${index})"
                >
                    ⚖️ قارن
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
// ==================================================
// نظام مقارنة الموبايلات
// ==================================================

let compareList = [];


// --------------------------------------------------
// إضافة موبايل للمقارنة
// --------------------------------------------------

function addToCompare(index) {

    const product = products[index];

    if (!product) {
        return;
    }

    // لو الموبايل موجود بالفعل
    if (compareList.includes(index)) {

        alert("الموبايل ده موجود بالفعل في المقارنة");

        return;
    }
    // أقصى عدد موبايلين
    if (compareList.length >= 2) {
        // تفريغ القائمة القديمة
        compareList = []; 
    }

    // إضافة الموبايل الحالي في كل الأحوال طالما لم يكن موجوداً من قبل
    compareList.push(index);
    updateCompareButton();

    // التحقق من عرض المقارنة أو إظهار رسالة التنبيه
    if (compareList.length === 2) {
        showCompare();
    } else {
        alert("تم إضافة " + product.name + ".\nاختار موبايل تاني للمقارنة");
    }
    

}


// --------------------------------------------------
// حذف موبايل من المقارنة
// --------------------------------------------------

function removeFromCompare(index) {

    compareList = compareList.filter((item, i) => i !== index);

    updateCompareButton();

    if (compareList.length < 2) {

        const modal = document.getElementById("compareModal");

        if (modal) {
            modal.remove();
        }

    } else {

        showCompare();

    }

}


// --------------------------------------------------
// زر المقارنة
// --------------------------------------------------

function updateCompareButton() {

    let button = document.getElementById("floatingCompareButton");

    if (!button) {

        button = document.createElement("button");

        button.id = "floatingCompareButton";

        document.body.appendChild(button);

    }

    if (compareList.length === 0) {

        button.style.display = "none";

        return;

    }

    button.style.display = "block";

    button.innerHTML =
        "⚖️ مقارنة (" +
        compareList.length +
        "/2)";

}


// --------------------------------------------------
// عرض المقارنة
// --------------------------------------------------

function showCompare() {

    if (compareList.length !== 2) {

        return;

    }

    const phone1 = products[compareList[0]];
    const phone2 = products[compareList[1]];

    if (!phone1 || !phone2) {

        return;

    }

    // حذف نافذة قديمة
    const oldModal = document.getElementById("compareModal");

    if (oldModal) {

        oldModal.remove();

    }


    const modal = document.createElement("div");

    modal.id = "compareModal";

    modal.innerHTML = `

        <div class="compare-overlay">

            <div class="compare-box">

                <button
                    class="compare-close"
                    onclick="closeCompare()"
                >
                    ×
                </button>

                <h2>
                    ⚖️ مقارنة الموبايلات
                </h2>

                <div class="compare-products">

                    <div class="compare-phone">

                        <img
                            src="${phone1.image}"
                            alt="${phone1.name}"
                        >

                        <h3>
                            ${phone1.name}
                        </h3>

                        <div class="compare-price">
                            ${phone1.price}
                        </div>

                        <button
                            class="remove-compare"
                            onclick="removeFromCompare(${compareList[0]})"
                        >
                            إزالة
                        </button>

                    </div>


                    <div class="compare-vs">
                        VS
                    </div>


                    <div class="compare-phone">

                        <img
                            src="${phone2.image}"
                            alt="${phone2.name}"
                        >

                        <h3>
                            ${phone2.name}
                        </h3>

                        <div class="compare-price">
                            ${phone2.price}
                        </div>

                        <button
                            class="remove-compare"
                            onclick="removeFromCompare(${compareList[1]})"
                        >
                            إزالة
                        </button>

                    </div>

                </div>


                <div class="comparison-table">

                    ${createComparisonRow(
                        "💰 السعر",
                        phone1.price,
                        phone2.price
                    )}

                    ${createComparisonRow(
                        "📱 الشاشة",
                        phone1.screen,
                        phone2.screen
                    )}

                    ${createComparisonRow(
                        "⚡ المعالج",
                        phone1.processor,
                        phone2.processor
                    )}

                    ${createComparisonRow(
                        "🧠 الرام",
                        phone1.ram + " GB",
                        phone2.ram + " GB"
                    )}

                    ${createComparisonRow(
                        "💾 التخزين",
                        phone1.storage + " GB",
                        phone2.storage + " GB"
                    )}

                    ${createComparisonRow(
                        "📷 الكاميرا الخلفية",
                        phone1.camera,
                        phone2.camera
                    )}

                    ${createComparisonRow(
                        "🤳 الكاميرا الأمامية",
                        phone1.frontCamera + " MP",
                        phone2.frontCamera + " MP"
                    )}

                    ${createComparisonRow(
                        "🔋 البطارية",
                        phone1.battery,
                        phone2.battery
                    )}

                    ${createComparisonRow(
                        "🤖 نظام التشغيل",
                        phone1.os,
                        phone2.os
                    )}

                </div>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

}


// --------------------------------------------------
// إنشاء صف من جدول المقارنة
// --------------------------------------------------

function createComparisonRow(title, value1, value2) {

    return `

        <div class="comparison-row">

            <div class="comparison-title">
                ${title}
            </div>

            <div class="comparison-value">
                ${value1 || "-"}
            </div>

            <div class="comparison-value">
                ${value2 || "-"}
            </div>

        </div>

    `;

}


// --------------------------------------------------
// إغلاق المقارنة
// --------------------------------------------------

function closeCompare() {

    const modal = document.getElementById("compareModal");

    if (modal) {
        modal.remove();
    }

    // مسح الموبايلات المختارة للمقارنة
    compareList = [];

    // إخفاء زر المقارنة العائم
    updateCompareButton();

}

function startNewComparison() {

    compareList = [];

    const modal = document.getElementById("compareModal");

    if (modal) {
        modal.remove();
    }

    updateCompareButton();

}


// --------------------------------------------------
// زر المقارنة العائم
// --------------------------------------------------

document.addEventListener("click", function(event) {

    if (event.target.id === "floatingCompareButton") {

        if (compareList.length === 2) {

            showCompare();

        }

    }

});


// ==================================================
// CSS الخاص بالمقارنة
// ==================================================

const compareStyle = document.createElement("style");

compareStyle.textContent = `

    .compare-btn {

        width: 100%;

        margin-top: 10px;

        padding: 10px;

        border: none;

        border-radius: 8px;

        background: #222;

        color: white;

        font-size: 15px;

        cursor: pointer;

        transition: 0.2s;

    }


    .compare-btn:hover {

        transform: translateY(-2px);

        opacity: 0.9;

    }


    #floatingCompareButton {

        position: fixed;

        bottom: 20px;

        right: 20px;

        z-index: 9998;

        border: none;

        border-radius: 50px;

        padding: 15px 22px;

        background: #111;

        color: white;

        font-size: 16px;

        font-weight: bold;

        cursor: pointer;

        box-shadow: 0 5px 20px rgba(0,0,0,0.3);

        display: none;

    }


    .compare-overlay {

        position: fixed;

        inset: 0;

        background: rgba(0,0,0,0.75);

        z-index: 9999;

        display: flex;

        justify-content: center;

        align-items: center;

        padding: 15px;

        overflow-y: auto;

    }


    .compare-box {

        position: relative;

        width: 100%;

        max-width: 1000px;

        max-height: 90vh;

        overflow-y: auto;

        background: white;

        border-radius: 18px;

        padding: 25px;

        box-sizing: border-box;

    }


    .compare-box h2 {

        text-align: center;

        margin-top: 5px;

        margin-bottom: 25px;

    }


    .compare-close {

        position: absolute;

        top: 10px;

        right: 15px;

        width: 40px;

        height: 40px;

        border: none;

        border-radius: 50%;

        background: #eee;

        font-size: 28px;

        cursor: pointer;

    }


    .compare-products {

        display: grid;

        grid-template-columns: 1fr 80px 1fr;

        align-items: center;

        gap: 15px;

        margin-bottom: 25px;

    }


    .compare-phone {

        text-align: center;

        padding: 15px;

        border-radius: 15px;

        background: #f5f5f5;

    }


    .compare-phone img {

        width: 150px;

        height: 180px;

        object-fit: contain;

        max-width: 100%;

    }


    .compare-phone h3 {

        margin: 10px 0;

    }


    .compare-price {

        font-weight: bold;

        font-size: 18px;

        margin-bottom: 10px;

    }


    .compare-vs {

        text-align: center;

        font-size: 22px;

        font-weight: bold;

    }


    .remove-compare {

        border: none;

        background: #d33;

        color: white;

        padding: 8px 15px;

        border-radius: 7px;

        cursor: pointer;

    }


    .comparison-table {

        width: 100%;

        border-radius: 12px;

        overflow: hidden;

    }


    .comparison-row {

        display: grid;

        grid-template-columns: 180px 1fr 1fr;

        border-bottom: 1px solid #ddd;

    }


    .comparison-title {

        font-weight: bold;

        padding: 15px;

        background: #f1f1f1;

    }


    .comparison-value {

        padding: 15px;

        line-height: 1.6;

        border-right: 1px solid #ddd;

    }


    @media (max-width: 700px) {

        .compare-box {

            padding: 15px;

        }


        .compare-products {

            grid-template-columns: 1fr 45px 1fr;

            gap: 5px;

        }


        .compare-phone {

            padding: 8px;

        }


        .compare-phone img {

            width: 100px;

            height: 130px;

        }


        .compare-phone h3 {

            font-size: 14px;

        }


        .compare-vs {

            font-size: 16px;

        }


        .comparison-row {

            grid-template-columns: 100px 1fr 1fr;

        }


        .comparison-title,
        .comparison-value {

            padding: 9px;

            font-size: 12px;

        }


        #floatingCompareButton {

            bottom: 15px;

            right: 15px;

            padding: 12px 17px;

            font-size: 14px;

        }

    }

`;

document.head.appendChild(compareStyle);


// تشغيل زر المقارنة
updateCompareButton();
