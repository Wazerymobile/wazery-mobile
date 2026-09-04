// ==================================================
// 1. مصفوفة بيانات الهواتف
// ==================================================
const products = [
    {
        name: "Infinix NOTE 60 Pro",
        price: "27,000 جنيه",
        image: "Note-60-Pro.jpg",
        screen: "6.78 بوصة AMOLED، دقة 1.5K، معدل تحديث 144Hz، سطوع يصل إلى 4500 nits، حماية Gorilla Glass 7i",
        processor: "Qualcomm Snapdragon 7s Gen 4 5G",
        ram: "12 GB",
        storage: "256 GB",
        camera: "50MP OIS Night Master + 8MP Ultra-Wide بزاوية 112°",
        frontCamera: "20 MP",
        battery: "6500mAh",
        os: "XOS 16"
    },
    {
        name: "Vivo Y500",
        price: "18,000 جنيه (نسخة 6GB) / 20,000 جنيه (نسخة 8GB)",
        image: "Vivo-Y500.jpg",
        screen: "6.83 بوصة AMOLED، دقة 1.5K (1260x2800)، معدل تحديث 120Hz، سطوع يصل إلى 5000 nits",
        processor: "Unisoc T7300 (تكنولوجيا 6 نانو)",
        ram: "6 GB / 8 GB",
        storage: "256 GB",
        camera: "50MP رئيسية (بمستشعر Sony IMX852) + 2MP ماكرو",
        frontCamera: "32 MP",
        battery: "8100mAh مع شحن سريع 44 واط",
        os: "Android 16 مع واجهة OriginOS 6"
    },
    {
        name: "Infinix NOTE 60",
        price: "20,000 جنيه",
        image: "Note-60.jpg",
        screen: "6.78 بوصة AMOLED، دقة 1.5K، معدل تحديث 144Hz، سطوع يصل إلى 4500 nits، حماية Gorilla Glass 7i",
        processor: "D 7,400 5G",
        ram: "8 GB",
        storage: "256 GB",
        camera: "50MP Night Master + 8MP Ultra-Wide",
        frontCamera: "13 MP",
        battery: "6150mAh",
        os: "XOS 16"
    },
    {
        name: "Infinix Hot 70",
        price: "حسب النسخة يختلف السعر",
        image: "Infinix-Hot-70-Colors.jpg",
        screen: "6.78 بوصة بدقة 720x1576 بها ثقب",
        processor: "ثماني النواة Helio G100 ULT تكنولوجيا 6 نانو",
        ram: "8GB / 6GB / 4GB حسب الإصدار",
        storage: "256GB / 128GB",
        camera: "مزدوجة 50+2 م.ب",
        frontCamera: "8 MP",
        battery: "5600mAh",
        os: "Android"
    },
    {
        name: "Samsung Galaxy A07",
        price: "حسب النسخة يختلف السعر",
        image: "A07.jpg",
        screen: "6.7 بوصة بدقة 720x1600 بها نوتش",
        processor: "معالج ثماني النواة Helio G99 تكنولوجيا 6 نانو",
        ram: "8GB / 6GB / 4GB حسب الإصدار",
        storage: "256GB / 128GB / 64GB",
        camera: "مزدوجة 50+2 م.ب",
        frontCamera: "8 MP",
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
        storage: "256 GB",
        camera: "50MP رئيسية + 12MP Ultra-Wide + 5MP، مع OIS",
        frontCamera: "12 MP",
        battery: "5000mAh",
        os: "Android"
    },
    {
        name: "Redmi A7",
        price: "6,200 جنيه",
        image: "Redmi-A7.jpg",
        screen: "6.88 بوصة بدقة 720x1640 بكسل بها نوتش",
        processor: "Unisoc T7250 تكنولوجيا 12 نانو",
        ram: "3 GB",
        storage: "64 GB",
        camera: "13 MP",
        frontCamera: "8 MP",
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
        frontCamera: "20 MP",
        battery: "5520mAh",
        os: "Xiaomi HyperOS 2"
    },
    {
        name: "Oppo Reno 16",
        price: "40,000 جنيه",
        image: "oppo-reno16.purpel.jpg",
        screen: "6.78 بوصة بدقة 720x1576 بها ثقب",
        processor: "Qualcomm Snapdragon 7 Gen 4 ثماني النواة 4 نانو",
        ram: "12 GB",
        storage: "256 GB",
        camera: "(Ultra-wide): 50 MP +(Wide): 50 MP + (Telephoto): 50 MP",
        frontCamera: "50 MP",
        battery: "6700mAh",
        os: "Android"
    },
    {
        name: "Oppo Reno 16 Pro",
        price: "58,000 جنيه",
        image: "oppo_reno_16.png",
        screen: "6.32 بوصة بدقة 1216x2640 بكسل بها ثقب",
        processor: "ثماني النواة Dimn 8550 Super تكنولوجيا 4 نانو",
        ram: "12 GB",
        storage: "512 GB",
        camera: "خلفية ثلاثية 200MB+50MB+50MB",
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
        frontCamera: "12 MP",
        battery: "5000mAh",
        os: "Android"
    },
    {
        name: "Honor 600",
        price: "24,000 جنيه",
        image: "honor-600.jpg",
        screen: "6.7 بوصة OLED، دقة 1.5K، معدل تحديث 120Hz، سطوع يصل إلى 5000 nits، تعتيم PWM 3840Hz",
        processor: "Qualcomm Snapdragon 7 Gen 4 (4nm)",
        ram: "12GB / 16GB",
        storage: "256GB / 512GB",
        camera: "200MP OIS رئيسية + 12MP Ultra-Wide",
        frontCamera: "50 MP",
        battery: "6500mAh (سيليكون كربون) - شحن سريع 80W",
        os: "MagicOS 10 (Android 16)"
    },
    {
        name: "Honor 600 Pro",
        price: "36,000 جنيه",
        image: "honor-600-pro.jpg",
        screen: "6.78 بوصة AMOLED، دقة 1.5K، معدل تحديث 120Hz، سطوع استثنائي 8000 nits، حماية للعين",
        processor: "Qualcomm Snapdragon 8 Elite (3nm)",
        ram: "12GB / 16GB",
        storage: "256GB / 512GB / 1TB",
        camera: "200MP OIS + 50MP Telephoto (3.5x Zoom) + 12MP Ultra-Wide",
        frontCamera: "50 MP",
        battery: "7000mAh - شحن سلكي 80W + لاسلكي 50W (IP68/IP69K)",
        os: "MagicOS 10 (Android 16)"
    },
        {
        name: "Infinix Note Edge",
        price: "18,500 جنيه",
        image: "Note-Edge.jpg",
        screen: "6.78 بوصة AMOLED منحنية (3D Curved)، دقة FHD+، معدل تحديث 120Hz، سطوع يصل إلى 1300 nits",
        processor: "MediaTek Dimensity 7020 (6nm)",
        ram: "8GB / 12GB",
        storage: "256 GB",
        camera: "108MP OIS رئيسية + 2MP عمق + عدسة AI",
        frontCamera: "32 MP",
        battery: "5000mAh - شحن سريع 45W",
        os: "XOS 14 (Android 14)"
    },
    {
        name: "Infinix GT 50 Pro",
        price: "34,500 جنيه",
        image: "GT-50-Pro.jpg",
        screen: "6.78 بوصة AMOLED مخصصة للألعاب، دقة 1.5K، معدل تحديث 144Hz، إضاءة RGB خلفية",
        processor: "MediaTek Dimensity 8300 Ultra (4nm)",
        ram: "12 GB",
        storage: "256GB / 512GB",
        camera: "108MP OIS رئيسية + 8MP Ultra-Wide + 2MP Macro",
        frontCamera: "32 MP",
        battery: "5500mAh - شحن سريع 90W",
        os: "XOS for GT (Android 15)"
    },
    {
        name: "Vivo V70 5G",
        price: "26,000 جنيه",
        image: "Vivo-V70-5G.jpg",
        screen: "6.78 بوصة AMOLED منحنية، دقة 1.5K، 120Hz، دعم 1 Billion Colors، سطوع 4500 nits",
        processor: "MediaTek Dimensity 8300 (4nm)",
        ram: "12 GB",
        storage: "256GB / 512GB",
        camera: "50MP ZEISS OIS رئيسية + 50MP Telephoto + 8MP Ultra-Wide",
        frontCamera: "50 MP ZEISS مع ضبط تلقائي للفوكس",
        battery: "5500mAh - شحن سريع 80W",
        os: "Funtouch OS 15 (Android 15)"
    },
    {
        name: "Vivo V70 F",
        price: "19,500 جنيه",
        image: "Vivo-V70F.jpg",
        screen: "6.67 بوصة AMOLED مسطحة، دقة FHD+، معدل تحديث 120Hz، سطوع 1800 nits",
        processor: "Qualcomm Snapdragon 685 / 6 Gen 1",
        ram: "8 GB",
        storage: "256 GB",
        camera: "50MP رئيسية بفتحة واسعة + 2MP عزل",
        frontCamera: "16 MP",
        battery: "5000mAh - شحن سريع 44W",
        os: "Funtouch OS 14 (Android 14)"
    },
    {
        name: "Samsung Galaxy A17",
        price: "8,500 جنيه",
        image: "Samsung-A17.jpg",
        screen: "6.6 بوصة Super AMOLED، دقة FHD+، معدل تحديث 90Hz",
        processor: "Exynos 1330 / MediaTek Helio G99",
        ram: "4GB / 6GB",
        storage: "128 GB",
        camera: "50MP رئيسية (OIS) + 5MP Ultra-Wide + 2MP Macro",
        frontCamera: "13 MP",
        battery: "5000mAh - شحن 25W",
        os: "One UI 7 (Android 15)"
    },
    {
        name: "Samsung Galaxy A27",
        price: "15,500 جنيه",
        image: "Samsung-A27.jpg",
        screen: "6.6 بوصة Super AMOLED، دقة FHD+، معدل تحديث 120Hz، حماية Gorilla Glass Victus",
        processor: "Exynos 1380 / Dimensity 6300",
        ram: "6GB / 8GB",
        storage: "128GB / 256GB",
        camera: "50MP OIS رئيسية + 8MP Ultra-Wide + 2MP Macro",
        frontCamera: "13 MP",
        battery: "5000mAh - شحن 25W (مقاومة ماء IP67)",
        os: "One UI 7 (Android 15)"
    },
    {
        name: "Redmi Note 15 Pro Plus",
        price: "28,000 جنيه",
        image: "Redmi-Note-15-Pro-Plus.jpg",
        screen: "6.67 بوصة OLED منحنية، دقة 1.5K، 120Hz، سطوع 3000 nits، حماية Gorilla Glass Victus 2",
        processor: "Qualcomm Snapdragon 7s Gen 3 (4nm)",
        ram: "12GB / 16GB",
        storage: "256GB / 512GB",
        camera: "200MP OIS رئيسية + 8MP Ultra-Wide + 2MP Macro",
        frontCamera: "32 MP",
        battery: "5100mAh - شحن خارق 120W",
        os: "Xiaomi HyperOS 2"
    },
    {
        name: "Vivo V60 Pro",
        price: "29,500 جنيه",
        image: "vivo-v60-pro.jpg",
        screen: "6.78 بوصة AMOLED منحنية، دقة 1.5K، 120Hz، سطوع 4500 nits",
        processor: "MediaTek Dimensity 8350 (4nm)",
        ram: "12 GB",
        storage: "256GB / 512GB",
        camera: "50MP ZEISS OIS + 50MP Telephoto (3x Zoom) + 50MP Ultra-Wide",
        frontCamera: "50MP ZEISS AF",
        battery: "6000mAh - شحن سريع 90W",
        os: "Funtouch OS 16 (Android 16)"
    },
    {
        name: "Tecno Camon 40 Pro 5G",
        price: "18,500 جنيه",
        image: "tecno-camon-40-pro.jpg",
        screen: "6.78 بوصة AMOLED، دقة FHD+، معدل تحديث 144Hz",
        processor: "MediaTek Dimensity 7300 5G",
        ram: "8GB / 12GB",
        storage: "256 GB",
        camera: "50MP Sony IMX890 OIS + 50MP Ultra-Wide",
        frontCamera: "50MP مع فلاش مزدوج",
        battery: "5500mAh - شحن سريع 70W",
        os: "HiOS 16"
    },
  
    {
        name: "Xiaomi 17 Ultra",
        price: "سيتم تحديده فور التوفر رسمياً",
        image: "Xiaomi-17-Ultra.jpg",
        screen: "6.9 بوصة، دقة 1200x2608 بكسل بها ثقب",
        processor: "Qualcomm Snapdragon 8 Elite Gen 5 (3 نانو)",
        ram: "16 GB",
        storage: "512 GB",
        camera: "ثلاثية 50MP + 200MP + 50MP",
        frontCamera: "50 MP",
        battery: "6000mAh",
        os: "Android 16"
    },
    {
        name: "Xiaomi 17T Pro",
        price: "سيتم تحديده فور التوفر رسمياً",
        image: "Xiaomi-17T-Pro.jpg",
        screen: "6.83 بوصة، دقة 1280x2772 بكسل بها ثقب",
        processor: "MediaTek Dimensity 9500 (3 نانو)",
        ram: "12 GB",
        storage: "512 GB",
        camera: "ثلاثية 50MP + 50MP + 12MP",
        frontCamera: "32 MP",
        battery: "7000mAh",
        os: "Android 16"
    },
    {
        name: "Xiaomi 17T",
        price: "سيتم تحديده فور التوفر رسمياً",
        image: "Xiaomi-17T.jpg",
        screen: "6.59 بوصة، دقة 1268x2756 بكسل بها ثقب",
        processor: "MediaTek Dimensity 8500 Ultra (4 نانو)",
        ram: "12 GB",
        storage: "256 GB / 512 GB",
        camera: "ثلاثية 50MP + 50MP + 12MP",
        frontCamera: "32 MP",
        battery: "6500mAh",
        os: "Android 16"
    },
    {
        name: "Xiaomi Redmi 17 5G",
        price: "250 دولار عالمياً (حوالي 12,300 جنيه)",
        image: "Redmi-17-5G.jpg",
        screen: "6.9 بوصة IPS LCD، دقة 720x1600، معدل تحديث 120Hz، حماية Gorilla Glass 7i",
        processor: "Qualcomm Snapdragon 4 Gen 5 (4 نانو)",
        ram: "4 GB / 6 GB",
        storage: "128 GB / 256 GB",
        camera: "50 MP رئيسية مع فلاش LED",
        frontCamera: "8 MP",
        battery: "7500mAh مع شحن سريع 45 واط",
        os: "Android 16 مع واجهة HyperOS 3"
    },
];

const storePhoneNumber = "201003211801";

// ==================================================
// 2. دالة عرض المنتجات في الصفحة
// ==================================================
function displayProducts(list) {
    const container = document.getElementById("products-container") || document.getElementById("productsContainer");
    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; font-size:20px; color:#666;">لا يوجد موبايل بهذا الاسم</div>`;
        return;
    }

    list.forEach((product) => {
        const index = products.indexOf(product);
        const card = document.createElement("div");
        card.className = "product-card";

        const waMessage = encodeURIComponent(`مرحباً Wazery Mobile، استفسار عن هاتف: ${product.name} بسعر ${product.price}`);
        const waLink = `https://wa.me/${storePhoneNumber}?text=${waMessage}`;

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=${encodeURIComponent(product.name)}'">
            <div class="product-info" style="padding: 10px;">
                <h3>${product.name}</h3>
                <div class="price" style="font-weight:bold; color:#c68b59; margin: 8px 0;">${product.price}</div>
                <div style="display:flex; gap:5px; flex-wrap:wrap; justify-content:center;">
                    <button class="details-btn" onclick="showDetails(${index})" style="padding: 6px 12px; cursor:pointer;"><i class="fas fa-eye"></i> المواصفات</button>
                    <button class="compare-btn" onclick="addToCompare(${index})" style="padding: 6px 12px; cursor:pointer;">⚖️ مقارنة</button>
                    <a href="${waLink}" target="_blank" style="padding: 6px 12px; background:#25d366; color:#fff; text-decoration:none; border-radius:5px; display:inline-block;"><i class="fab fa-whatsapp"></i> طلب</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ==================================================
// 3. عرض تفاصيل الموبايل (Modal)
// ==================================================
function showDetails(index) {
    const product = products[index];
    if (!product) return;

    const modalImg = document.getElementById("modalImg") || document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle") || document.getElementById("modalName");
    const modalPrice = document.getElementById("modalPrice");
    const specScreen = document.getElementById("specScreen") || document.getElementById("modalScreen");
    const specCpu = document.getElementById("specCpu") || document.getElementById("modalProcessor");
    const specRam = document.getElementById("specRam") || document.getElementById("modalRam");
    const specStorage = document.getElementById("specStorage") || document.getElementById("modalStorage");
    const specMainCam = document.getElementById("specMainCam") || document.getElementById("modalCamera");
    const specSelfieCam = document.getElementById("specSelfieCam") || document.getElementById("modalFrontCamera");
    const specBattery = document.getElementById("specBattery") || document.getElementById("modalBattery");
    const specOs = document.getElementById("specOs") || document.getElementById("modalOS");
    
    if (modalImg) modalImg.src = product.image;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = product.price;
    if (specScreen) specScreen.textContent = product.screen;
    if (specCpu) specCpu.textContent = product.processor;
    if (specRam) specRam.textContent = product.ram;
    if (specStorage) specStorage.textContent = product.storage;
    if (specMainCam) specMainCam.textContent = product.camera;
    if (specSelfieCam) specSelfieCam.textContent = product.frontCamera;
    if (specBattery) specBattery.textContent = product.battery;
    if (specOs) specOs.textContent = product.os;

    const modalWaBtn = document.getElementById("modalWaBtn");
    if (modalWaBtn) {
        const waMessage = encodeURIComponent(`مرحباً Wazery Mobile، أرغب في طلب هاتف ${product.name}`);
        modalWaBtn.href = `https://wa.me/${storePhoneNumber}?text=${waMessage}`;
    }

    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "none";
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("productModal");
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
});

// ==================================================
// 4. البحث المباشر
// ==================================================
function searchProducts() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    const searchText = input.value.toLowerCase().trim();
    if (searchText === "") {
        displayProducts(products);
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);
}

// ==================================================
// 5. نظام مقارنة الهواتف
// ==================================================
let compareList = [];

function addToCompare(index) {
    const product = products[index];
    if (!product) return;

    if (compareList.includes(index)) {
        alert("الموبايل ده موجود بالفعل في المقارنة");
        return;
    }

    if (compareList.length >= 2) {
        compareList = []; 
    }

    compareList.push(index);
    updateCompareButton();

    if (compareList.length === 2) {
        showCompare();
    } else {
        alert("تم إضافة " + product.name + ".\nاختار موبايل تاني للمقارنة");
    }
}

function removeFromCompare(index) {
    compareList = compareList.filter(item => item !== index);
    updateCompareButton();

    if (compareList.length < 2) {
        closeCompare();
    } else {
        showCompare();
    }
}

function updateCompareButton() {
    let button = document.getElementById("floatingCompareButton");
    if (!button) {
        button = document.createElement("button");
        button.id = "floatingCompareButton";
        button.style.cssText = "position:fixed; bottom:20px; right:20px; background:#1e3c72; color:#fff; border:none; padding:12px 20px; border-radius:30px; font-weight:bold; cursor:pointer; z-index:999; box-shadow:0 4px 10px rgba(0,0,0,0.3);";
        document.body.appendChild(button);
    }

    if (compareList.length === 0) {
        button.style.display = "none";
        return;
    }

    button.style.display = "block";
    button.innerHTML = `⚖️ مقارنة (${compareList.length}/2)`;
}

function showCompare() {
    if (compareList.length !== 2) return;

    const phone1 = products[compareList[0]];
    const phone2 = products[compareList[1]];
    if (!phone1 || !phone2) return;

    const oldModal = document.getElementById("compareModal");
    if (oldModal) oldModal.remove();

    const modal = document.createElement("div");
    modal.id = "compareModal";
    modal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:1000; display:flex; justify-content:center; align-items:center;";

    modal.innerHTML = `
        <div style="background:#fff; width:90%; max-width:700px; max-height:90vh; overflow-y:auto; border-radius:12px; padding:20px; position:relative;">
            <button onclick="closeCompare()" style="position:absolute; top:10px; left:15px; font-size:24px; border:none; background:none; cursor:pointer;">×</button>
            <h2 style="text-align:center; color:#1e3c72; margin-bottom:15px;">⚖️ مقارنة الموبايلات</h2>
            
            <div style="display:flex; justify-content:space-around; text-align:center; margin-bottom:20px;">
                <div>
                    <img src="${phone1.image}" style="height:100px; object-fit:contain;" onerror="this.src='https://via.placeholder.com/100'">
                    <h4>${phone1.name}</h4>
                    <p style="color:#c68b59;">${phone1.price}</p>
                </div>
                <div style="font-size:24px; font-weight:bold; align-self:center;">VS</div>
                <div>
                    <img src="${phone2.image}" style="height:100px; object-fit:contain;" onerror="this.src='https://via.placeholder.com/100'">
                    <h4>${phone2.name}</h4>
                    <p style="color:#c68b59;">${phone2.price}</p>
                </div>
            </div>

            <table style="width:100%; border-collapse:collapse; text-align:center;" border="1">
                <tr><th>المواصفة</th><th>${phone1.name}</th><th>${phone2.name}</th></tr>
                <tr><td>💰 السعر</td><td>${phone1.price}</td><td>${phone2.price}</td></tr>
                <tr><td>📱 الشاشة</td><td>${phone1.screen}</td><td>${phone2.screen}</td></tr>
                <tr><td>⚡ المعالج</td><td>${phone1.processor}</td><td>${phone2.processor}</td></tr>
                <tr><td>🧠 الرام</td><td>${phone1.ram}</td><td>${phone2.ram}</td></tr>
                <tr><td>💾 التخزين</td><td>${phone1.storage}</td><td>${phone2.storage}</td></tr>
                <tr><td>📷 الكاميرا الخلفية</td><td>${phone1.camera}</td><td>${phone2.camera}</td></tr>
                <tr><td>🤳 الكاميرا الأمامية</td><td>${phone1.frontCamera}</td><td>${phone2.frontCamera}</td></tr>
                <tr><td>🔋 البطارية</td><td>${phone1.battery}</td><td>${phone2.battery}</td></tr>
                <tr><td>🤖 نظام التشغيل</td><td>${phone1.os}</td><td>${phone2.os}</td></tr>
            </table>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeCompare() {
    const modal = document.getElementById("compareModal");
    if (modal) modal.remove();
    compareList = [];
    updateCompareButton();
}

document.addEventListener("click", function(event) {
    if (event.target.id === "floatingCompareButton" && compareList.length === 2) {
        showCompare();
    }
});

// ==================================================
// 6. تشغيل الكود فور التحميل
// ==================================================
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});
