/**
 * ShopVerse — Premier E-Commerce Engine
 * Unified All In One Web Ecosystem
 */

// Product Catalog Data
const PRODUCTS = [
    {
        id: 'prod-1',
        title: 'Lenovo LOQ 15 Gaming Laptop',
        subtitle: 'Intel Core i5-13450HX • RTX 4050 6GB • 16GB DDR5 • 512GB NVMe SSD',
        category: 'gaming',
        categoryName: 'Gaming Laptops',
        price: 78990,
        originalPrice: 99990,
        discount: 21,
        rating: 4.8,
        reviewsCount: 1420,
        image: 'box10_image.jpg',
        badge: 'Best Seller',
        badgeType: 'bestseller',
        inStock: true,
        stockCount: 8,
        description: 'Experience blazing performance with Intel Core i5-13450HX CPU and NVIDIA GeForce RTX 4050 6GB graphics. Featuring 144Hz FHD IPS display, Lenovo AI Engine+ with LA1 AI Chip, and military-grade MIL-STD-810H durability.',
        specs: [
            '13th Gen Intel Core i5-13450HX (10 Cores, up to 4.6GHz)',
            'NVIDIA GeForce RTX 4050 6GB GDDR6 (95W TGP)',
            '15.6" FHD (1920x1080) IPS 144Hz 100% sRGB Display',
            '16GB DDR5 4800MHz RAM + 512GB PCIe 4.0 SSD',
            'Backlit Keyboard with Anti-Ghosting & Rapid Charge Pro'
        ]
    },
    {
        id: 'prod-2',
        title: 'Acer Predator Helios Neo 16',
        subtitle: 'Intel Core i7-14700HX • RTX 4060 8GB • 16GB DDR5 • 1TB Gen4 SSD',
        category: 'gaming',
        categoryName: 'Gaming Laptops',
        price: 114990,
        originalPrice: 144990,
        discount: 21,
        rating: 4.9,
        reviewsCount: 980,
        image: 'box11_image.jpg',
        badge: 'Top Rated',
        badgeType: 'hot',
        inStock: true,
        stockCount: 5,
        description: 'Dominance unlocked. Acer Predator Helios Neo 16 comes equipped with state-of-the-art 5th Gen AeroBlade 3D Fans, liquid metal thermal grease, and an ultra-sharp 16" WQXGA 165Hz IPS 100% DCI-P3 display.',
        specs: [
            '14th Gen Intel Core i7-14700HX (20 Cores, 28 Threads)',
            'NVIDIA GeForce RTX 4060 8GB GDDR6 (140W Max TGP)',
            '16" WQXGA (2560x1600) 165Hz 3ms 500 nits IPS Display',
            '16GB Dual-Channel DDR5 + 1TB PCIe Gen4 SSD',
            'Custom 4-Zone RGB Keyboard & Killer Wi-Fi 6E'
        ]
    },
    {
        id: 'prod-3',
        title: 'Asus ROG Strix SCAR 18',
        subtitle: 'Intel Core i9-14900HX • RTX 4090 16GB • 32GB DDR5 • 2TB Raid0 SSD',
        category: 'gaming',
        categoryName: 'Gaming Laptops',
        price: 319990,
        originalPrice: 359990,
        discount: 11,
        rating: 5.0,
        reviewsCount: 430,
        image: 'box1_image.jpg',
        badge: 'Ultimate Flagship',
        badgeType: 'exclusive',
        inStock: true,
        stockCount: 3,
        description: 'The pinnacle of mobile PC gaming. Powered by Intel flagship i9-14900HX processor and RTX 4090 16GB GPU with Rog Nebula HDR 2.5K 240Hz Mini LED panel for breathtaking contrast and response time.',
        specs: [
            'Intel Core i9-14900HX (24 Cores, up to 5.8 GHz Boost)',
            'NVIDIA GeForce RTX 4090 16GB (175W TGP with Dynamic Boost)',
            '18" 2.5K (2560x1600) Mini LED 240Hz 1100 nits Display',
            '32GB DDR5 5600MHz RAM + 2TB NVMe PCIe 4.0 SSD',
            'Conductonaut Extreme Liquid Metal & Tri-Fan Technology'
        ]
    },
    {
        id: 'prod-4',
        title: 'Samsung Galaxy S25 Ultra 5G',
        subtitle: 'Titanium Gray • 512GB Storage • 12GB RAM • 200MP Quad AI Camera',
        category: 'mobiles',
        categoryName: 'Smartphones',
        price: 129999,
        originalPrice: 144999,
        discount: 10,
        rating: 4.9,
        reviewsCount: 2310,
        image: 'box4_image.jpg',
        badge: 'New Release',
        badgeType: 'new',
        inStock: true,
        stockCount: 12,
        description: 'Unleash next-gen Galaxy AI with Samsung Galaxy S25 Ultra. Boasts aerospace-grade Titanium frame, Corning Gorilla Armor with anti-reflective coating, integrated S-Pen, and groundbreaking 200MP ProVisual Engine.',
        specs: [
            'Snapdragon 8 Elite Mobile Platform for Galaxy',
            '6.8" Dynamic AMOLED 2X 120Hz LTPO QHD+ Display (2600 nits)',
            '200MP Main + 50MP 5x Periscope + 50MP Ultra-Wide Camera',
            '5000 mAh Battery with 45W Fast Charging & Qi2 Wireless',
            'Built-in S-Pen Stylus & Galaxy AI Live Translate'
        ]
    },
    {
        id: 'prod-5',
        title: 'Next-Gen Flagship Smartphone Pro',
        subtitle: 'Curved OLED Display • 108MP Studio Sensor • 120W HyperCharge',
        category: 'mobiles',
        categoryName: 'Smartphones',
        price: 49999,
        originalPrice: 64999,
        discount: 23,
        rating: 4.7,
        reviewsCount: 1890,
        image: 'box12_image.jpg',
        badge: 'Value Pick',
        badgeType: 'deal',
        inStock: true,
        stockCount: 15,
        description: 'A masterpiece in design and engineering. Features 1.5K 120Hz 10-bit curved AMOLED display, dual stereo speakers tuned by Dolby Atmos, and ultra-fast 120W charging that hits 100% in just 19 minutes.',
        specs: [
            'Flagship Octa-Core 4nm 5G Processor',
            '6.74" 120Hz 1.5K 3D Curved AMOLED Display',
            '108MP OIS Primary Sensor with 4K 60fps Video',
            '120W HyperCharge (0 to 100% in 19 mins)',
            'Dual Stereo Dolby Atmos Speakers & Vapor Chamber Cooling'
        ]
    },
    {
        id: 'prod-6',
        title: 'Studio Hi-Fi Noise Cancelling Gear',
        subtitle: 'Over-Ear Wireless Hi-Res Audio • 40mm Titanium Drivers • 40h Playtime',
        category: 'audio',
        categoryName: 'Audio & Electronics',
        price: 18990,
        originalPrice: 24990,
        discount: 24,
        rating: 4.8,
        reviewsCount: 3120,
        image: 'box2_image.jpg',
        badge: 'Sound Choice',
        badgeType: 'hot',
        inStock: true,
        stockCount: 20,
        description: 'Immerse in pure, lossless studio-grade acoustics. Hybrid active noise cancellation filters out ambient disturbances by up to 98%, while multipoint Bluetooth 5.4 ensures seamless switching across all your devices.',
        specs: [
            '40mm Custom Titanium Dynamic Drivers with LDAC Codec',
            '-45dB Hybrid Active Noise Cancellation with Transparency Mode',
            'Up to 40 Hours Continuous Playback with ANC Enabled',
            'Fast Charge: 10 mins plug gives 5 hours audio',
            'Ultra-Plush Memory Foam Ear Cushions for All-Day Wear'
        ]
    },
    {
        id: 'prod-7',
        title: 'Pro Ergonomic Gaming & Work Station',
        subtitle: '4D Armrests • Memory Foam Lumbar Support • 165° Recliner • Heavy Duty',
        category: 'furniture',
        categoryName: 'Home & Furniture',
        price: 16499,
        originalPrice: 22999,
        discount: 28,
        rating: 4.7,
        reviewsCount: 840,
        image: 'box3_image.jpg',
        badge: 'Ergonomic Choice',
        badgeType: 'deal',
        inStock: true,
        stockCount: 7,
        description: 'Designed for marathon gaming sessions and high-productivity workdays. Built on a reinforced steel chassis with Class-4 hydraulic gas lift, magnetic memory foam head pillow, and multi-tilt mechanism.',
        specs: [
            'Class-4 Heavy Duty SGS Certified Gas Lift (up to 150 kg)',
            '4D Adjustable Armrests (Height, Angle, Depth, Width)',
            '90° to 165° Backrest Recline with Rocking Function',
            'Breathable Premium PU Leather with Cold-Cured Foam',
            'Silent Smooth Glide 65mm Caster Wheels'
        ]
    },
    {
        id: 'prod-8',
        title: 'Anime Action Figures & Collector Statues',
        subtitle: 'Demon Slayer & Jujutsu Kaisen Series • Hand-Painted • PVC Sculpt 28cm',
        category: 'toys',
        categoryName: 'Toys & Collectibles',
        price: 3499,
        originalPrice: 5999,
        discount: 41,
        rating: 4.9,
        reviewsCount: 4200,
        image: 'box8_image.jpg',
        badge: 'Collector Edition',
        badgeType: 'bestseller',
        inStock: true,
        stockCount: 14,
        description: 'A must-have for anime lovers! Authentic scale collectible statue featuring intricate sculpting, vibrant hand-painted details, and custom battle aura effects with a heavy display base.',
        specs: [
            '28cm Scale High-Grade Solid PVC & ABS Construction',
            'Meticulous Hand-Painted Finishes with Shading Details',
            'Interchangeable Weapons, Hands and Facial Expressions',
            'Premium Collector Gift Box with Official Hologram',
            'Custom Translucent Flame & Energy Aura Stand'
        ]
    },
    {
        id: 'prod-9',
        title: 'Smart Interactive STEM Robotic Toys',
        subtitle: 'App Controlled • Coding & Robotics Kit • Obstacle Avoidance Sensors',
        category: 'toys',
        categoryName: 'Toys & Collectibles',
        price: 2899,
        originalPrice: 4499,
        discount: 35,
        rating: 4.6,
        reviewsCount: 1140,
        image: 'box7_image.jpg',
        badge: 'Kids & Teens',
        badgeType: 'deal',
        inStock: true,
        stockCount: 18,
        description: 'Inspire creativity and logical thinking with this interactive buildable STEM robotics kit. Control movements, program customized dance routines, or solve obstacle courses using the smartphone app.',
        specs: [
            'Includes 280+ Snap-Together Precision Engineering Parts',
            'Bluetooth 5.0 Smartphone App (iOS & Android Compatible)',
            'Dual Ultrasonic Sensors for Smart Obstacle Avoidance',
            'Interactive Drag-and-Drop Block Coding for Beginners',
            'Rechargeable Lithium Battery with USB-C Charging'
        ]
    },
    {
        id: 'prod-10',
        title: 'Luxury Herbal Beauty & Skin Glow Care',
        subtitle: 'Organic Vitamin C Serum • Retinol Night Creme • SPF 50+ Sunscreen',
        category: 'beauty',
        categoryName: 'Beauty & Wellness',
        price: 2199,
        originalPrice: 3499,
        discount: 37,
        rating: 4.8,
        reviewsCount: 2850,
        image: 'box5_image.jpg',
        badge: 'Dermatologist Tested',
        badgeType: 'bestseller',
        inStock: true,
        stockCount: 25,
        description: 'Revitalize and nourish your skin with 100% natural, dermatologist-certified botanicals. Formulated with 15% Pure Vitamin C, Hyaluronic Acid, and Niacinamide for radiant, glowing skin.',
        specs: [
            'All-Natural Botanical Extracts, Paraben & Sulfate Free',
            '15% Pure Vitamin C for Brightening & Pigmentation Defense',
            'Broad Spectrum SPF 50+ PA++++ Non-Greasy Daily Shield',
            'Dermatologically Tested for All Skin Types, Including Sensitive',
            'Cruelty-Free Certified & Eco-Friendly Packaging'
        ]
    },
    {
        id: 'prod-11',
        title: 'Smart Pet Care & Automatic Feeder Pro',
        subtitle: '1080p HD Night Vision Camera • 2-Way Voice Audio • App Meal Scheduler',
        category: 'pets',
        categoryName: 'Pet Care & Accessories',
        price: 5499,
        originalPrice: 7999,
        discount: 31,
        rating: 4.7,
        reviewsCount: 760,
        image: 'box6_image.jpg',
        badge: 'Smart Pet Tech',
        badgeType: 'deal',
        inStock: true,
        stockCount: 9,
        description: 'Never worry about your furry friend while away. Set precise meal schedules, dispense treats remotely, and talk to your pets anytime with crisp 1080p night vision and 2-way audio stream.',
        specs: [
            '4L Large Capacity Anti-Clog Food Hopper with Desiccant Bag',
            '1080p HD Ultra-Wide Angle Camera with Infrared Night Vision',
            'Two-Way Audio: Talk to your pets & record meal call voice',
            'Smart App Control (Wi-Fi 2.4GHz) with Low-Food Alerts',
            'Dual Power: Wall Adapter + Emergency Battery Backup'
        ]
    }
];

// App State
const state = {
    products: [...PRODUCTS],
    filteredProducts: [...PRODUCTS],
    cart: JSON.parse(localStorage.getItem('shopverse_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('shopverse_wishlist') || '[]'),
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    selectedProduct: null
};

// Currency Formatter
function formatPrice(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initProductsGrid();
    initCategoryFilters();
    initSearch();
    initSorting();
    initCartDrawer();
    initWishlist();
    initQuickViewModal();
    initCheckoutModal();
    initDealsTimer();
    initNavbarScroll();
    initBackToTop();
    initPreloader();
    updateCartUI();
    updateWishlistUI();
});

// 1. Render Products Grid
function initProductsGrid() {
    const container = document.getElementById('shopGrid');
    if (!container) return;

    if (state.filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-box-open"></i>
                <h3>No products found</h3>
                <p>We couldn't find any products matching "<strong>${escapeHtml(state.searchQuery)}</strong>".</p>
                <button class="btn-clear-filter" onclick="clearAllFilters()">View All Products</button>
            </div>
        `;
        return;
    }

    container.innerHTML = state.filteredProducts.map((p, idx) => {
        const isWishlisted = state.wishlist.includes(p.id);
        const inCart = state.cart.find(item => item.id === p.id);
        
        return `
            <article class="product-card" id="${p.id}" data-category="${p.category}" style="animation-delay: ${idx * 0.05}s">
                <div class="card-badge ${p.badgeType}">${p.badge}</div>
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                        onclick="toggleWishlist('${p.id}', event)" 
                        title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                        aria-label="Wishlist">
                    <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
                </button>
                
                <div class="product-img-wrapper" onclick="openQuickView('${p.id}')">
                    <div class="product-img" style="background-image: url('${p.image}');"></div>
                    <div class="quick-view-overlay">
                        <i class="fa-solid fa-eye"></i> Quick View
                    </div>
                </div>

                <div class="product-details">
                    <span class="product-category-tag">${p.categoryName}</span>
                    <h3 class="product-title" onclick="openQuickView('${p.id}')">${p.title}</h3>
                    <p class="product-subtitle">${p.subtitle}</p>
                    
                    <div class="product-rating">
                        <div class="stars">
                            ${renderRatingStars(p.rating)}
                        </div>
                        <span class="rating-value">${p.rating.toFixed(1)}</span>
                        <span class="reviews-count">(${p.reviewsCount.toLocaleString()})</span>
                    </div>

                    <div class="product-price-row">
                        <div class="price-main">
                            <span class="current-price">${formatPrice(p.price)}</span>
                            <span class="original-price">${formatPrice(p.originalPrice)}</span>
                        </div>
                        <span class="discount-pill">-${p.discount}%</span>
                    </div>

                    <div class="stock-status ${p.stockCount <= 5 ? 'low-stock' : 'in-stock'}">
                        <i class="fa-solid ${p.stockCount <= 5 ? 'fa-fire' : 'fa-check'}"></i>
                        <span>${p.stockCount <= 5 ? `Only ${p.stockCount} left in stock!` : 'In Stock • Prime Delivery'}</span>
                    </div>

                    <div class="card-actions">
                        <button class="btn-add-cart ${inCart ? 'in-cart' : ''}" onclick="addToCart('${p.id}', event)">
                            <i class="fa-solid ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i>
                            <span>${inCart ? `In Cart (${inCart.quantity})` : 'Add to Cart'}</span>
                        </button>
                        <button class="btn-buy-now" onclick="instantBuy('${p.id}', event)">
                            <i class="fa-solid fa-bolt"></i> Buy
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// 2. Rating Stars Helper
function renderRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalf) {
        stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fa-regular fa-star"></i>';
    }
    return stars;
}

// 3. Category Filters
function initCategoryFilters() {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.activeCategory = pill.getAttribute('data-category');
            applyFilters();
        });
    });
}

// 4. Live Search
function initSearch() {
    const searchInput = document.getElementById('navbarSearchInput');
    const searchSelect = document.getElementById('searchCategorySelect');
    const clearBtn = document.getElementById('searchClearBtn');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        if (clearBtn) clearBtn.style.display = state.searchQuery ? 'block' : 'none';
        applyFilters();
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            state.searchQuery = '';
            clearBtn.style.display = 'none';
            applyFilters();
            searchInput.focus();
        });
    }

    if (searchSelect) {
        searchSelect.addEventListener('change', (e) => {
            const selected = e.target.value.toLowerCase();
            state.activeCategory = selected === 'all' ? 'all' : selected;
            
            // Sync with category pills
            document.querySelectorAll('.category-pill').forEach(pill => {
                pill.classList.toggle('active', pill.getAttribute('data-category') === state.activeCategory);
            });
            
            applyFilters();
        });
    }
}

// 5. Sorting
function initSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        applyFilters();
    });
}

// 6. Apply Filters & Sort
function applyFilters() {
    let result = [...PRODUCTS];

    // Category Filter
    if (state.activeCategory !== 'all') {
        result = result.filter(p => p.category === state.activeCategory);
    }

    // Search Query Filter
    if (state.searchQuery) {
        result = result.filter(p => 
            p.title.toLowerCase().includes(state.searchQuery) ||
            p.subtitle.toLowerCase().includes(state.searchQuery) ||
            p.categoryName.toLowerCase().includes(state.searchQuery) ||
            p.description.toLowerCase().includes(state.searchQuery)
        );
    }

    // Sorting
    if (state.sortBy === 'price-low') {
        result.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
        result.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'discount') {
        result.sort((a, b) => b.discount - a.discount);
    }

    state.filteredProducts = result;
    initProductsGrid();

    // Update results count indicator
    const countEl = document.getElementById('resultsCount');
    if (countEl) {
        countEl.textContent = `${result.length} item${result.length === 1 ? '' : 's'}`;
    }
}

function clearAllFilters() {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.sortBy = 'featured';

    const searchInput = document.getElementById('navbarSearchInput');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.category-pill').forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-category') === 'all');
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'featured';

    applyFilters();
}

// 7. Cart Drawer Management
function initCartDrawer() {
    const cartToggle = document.getElementById('cartNavBtn');
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    const closeBtn = document.getElementById('cartCloseBtn');
    const continueBtn = document.getElementById('cartContinueBtn');

    if (cartToggle && drawer && overlay) {
        cartToggle.addEventListener('click', openCartDrawer);
        if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
        if (continueBtn) continueBtn.addEventListener('click', closeCartDrawer);
        overlay.addEventListener('click', closeCartDrawer);
    }
}

function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer && overlay) {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer && overlay) {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function addToCart(productId, event) {
    if (event) event.stopPropagation();

    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        state.cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            categoryName: product.categoryName,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    initProductsGrid(); // Refresh in-cart status on cards
    showToast(`Added "${product.title}" to your cart! 🛒`);
}

function instantBuy(productId, event) {
    if (event) event.stopPropagation();
    addToCart(productId);
    openCheckoutModal();
}

function updateCartQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCartUI();
    initProductsGrid();
}

function removeFromCart(productId) {
    const item = state.cart.find(i => i.id === productId);
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    initProductsGrid();
    if (item) showToast(`Removed "${item.title}" from cart`);
}

function saveCart() {
    localStorage.setItem('shopverse_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
    const badge = document.getElementById('navCartBadge');
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (badge) {
        badge.textContent = totalCount;
        badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
        badge.classList.add('pulse');
        setTimeout(() => badge.classList.remove('pulse'), 400);
    }

    // Render Drawer Content
    const itemsContainer = document.getElementById('cartDrawerItems');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    const shippingEl = document.getElementById('cartShipping');
    const progressFill = document.getElementById('freeShippingFill');
    const progressText = document.getElementById('freeShippingText');
    const checkoutBtn = document.getElementById('cartCheckoutBtn');

    if (!itemsContainer) return;

    const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const freeDeliveryThreshold = 10000;
    const isFreeShipping = subtotal >= freeDeliveryThreshold || subtotal === 0;
    const shippingCost = isFreeShipping ? 0 : 499;
    const finalTotal = subtotal + shippingCost;

    if (state.cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Your shopping cart is empty!</p>
                <span>Discover top electronics, gaming rigs, and deals.</span>
            </div>
        `;
        if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
        itemsContainer.innerHTML = state.cart.map(item => `
            <div class="cart-item-row" id="cart-item-${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-head">
                        <span class="cart-item-title">${item.title}</span>
                        <button class="btn-remove-item" onclick="removeFromCart('${item.id}')" title="Remove item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <span class="cart-item-cat">${item.categoryName}</span>
                    <div class="cart-item-bottom">
                        <div class="quantity-stepper">
                            <button class="step-btn" onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="step-value">${item.quantity}</span>
                            <button class="step-btn" onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
                    </div>
                </div>
            </div>
        `).join('');
        if (checkoutBtn) checkoutBtn.disabled = false;
    }

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = isFreeShipping ? 'FREE' : formatPrice(shippingCost);
    if (totalEl) totalEl.textContent = formatPrice(finalTotal);

    // Free delivery progress bar
    if (progressFill && progressText) {
        if (subtotal >= freeDeliveryThreshold) {
            progressFill.style.width = '100%';
            progressText.innerHTML = '<i class="fa-solid fa-circle-check"></i> You have qualified for <strong>FREE Express Prime Delivery</strong>!';
        } else {
            const diff = freeDeliveryThreshold - subtotal;
            const pct = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));
            progressFill.style.width = pct + '%';
            progressText.innerHTML = `Add <strong>${formatPrice(diff)}</strong> more for <strong>FREE Prime Delivery</strong>`;
        }
    }
}

// 8. Wishlist
function initWishlist() {
    const navWishBtn = document.getElementById('navWishlistBtn');
    if (navWishBtn) {
        navWishBtn.addEventListener('click', () => {
            if (state.wishlist.length === 0) {
                showToast('Your Wishlist is empty! Click the heart on any item.');
                return;
            }
            // Filter grid to wishlisted items
            state.filteredProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
            initProductsGrid();
            showToast(`Showing ${state.wishlist.length} saved wishlist item${state.wishlist.length > 1 ? 's' : ''}`);
        });
    }
}

function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();

    const idx = state.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);

    if (idx >= 0) {
        state.wishlist.splice(idx, 1);
        if (product) showToast(`Removed "${product.title}" from Wishlist`);
    } else {
        state.wishlist.push(productId);
        if (product) showToast(`Added "${product.title}" to Wishlist! ❤️`);
    }

    localStorage.setItem('shopverse_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
    initProductsGrid();
}

function updateWishlistUI() {
    const badge = document.getElementById('navWishlistBadge');
    if (badge) {
        badge.textContent = state.wishlist.length;
        badge.style.display = state.wishlist.length > 0 ? 'inline-flex' : 'none';
    }
}

// 9. Quick View Modal
function initQuickViewModal() {
    const modal = document.getElementById('quickViewModal');
    const closeBtn = document.getElementById('quickViewCloseBtn');
    const overlay = document.getElementById('quickViewOverlay');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', closeQuickView);
    }
    if (overlay && modal) {
        overlay.addEventListener('click', closeQuickView);
    }
}

function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    state.selectedProduct = product;
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewBody');
    if (!modal || !content) return;

    const inCart = state.cart.find(item => item.id === product.id);
    const isWishlisted = state.wishlist.includes(product.id);

    content.innerHTML = `
        <div class="modal-grid">
            <div class="modal-img-col">
                <img src="${product.image}" alt="${product.title}" class="modal-main-img">
                <span class="modal-badge ${product.badgeType}">${product.badge}</span>
            </div>
            <div class="modal-info-col">
                <div class="modal-category">${product.categoryName}</div>
                <h2 class="modal-title">${product.title}</h2>
                <p class="modal-sub">${product.subtitle}</p>

                <div class="modal-rating">
                    <div class="stars">${renderRatingStars(product.rating)}</div>
                    <strong>${product.rating.toFixed(1)}</strong>
                    <span>(${product.reviewsCount.toLocaleString()} customer reviews)</span>
                </div>

                <div class="modal-price-box">
                    <span class="modal-current-price">${formatPrice(product.price)}</span>
                    <span class="modal-orig-price">${formatPrice(product.originalPrice)}</span>
                    <span class="modal-save-pill">Save ${product.discount}%</span>
                </div>

                <p class="modal-desc">${product.description}</p>

                <div class="modal-specs">
                    <h4>Key Highlights:</h4>
                    <ul>
                        ${product.specs.map(s => `<li><i class="fa-solid fa-check"></i> <span>${s}</span></li>`).join('')}
                    </ul>
                </div>

                <div class="modal-cta-row">
                    <button class="btn-modal-cart ${inCart ? 'in-cart' : ''}" onclick="addToCart('${product.id}'); openCartDrawer(); closeQuickView();">
                        <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                    </button>
                    <button class="btn-modal-buy" onclick="instantBuy('${product.id}'); closeQuickView();">
                        <i class="fa-solid fa-bolt"></i> Buy Now
                    </button>
                    <button class="btn-modal-wish ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}'); openQuickView('${product.id}');" title="Add to Wishlist">
                        <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                </div>

                <div class="modal-assurance">
                    <div><i class="fa-solid fa-truck-fast"></i> Free 1-Day Prime Delivery</div>
                    <div><i class="fa-solid fa-shield-halved"></i> 100% Genuine Brand Warranty</div>
                    <div><i class="fa-solid fa-arrow-rotate-left"></i> 7 Days Replacement Guarantee</div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// 10. Checkout Flow & Order Placement
function initCheckoutModal() {
    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    const modal = document.getElementById('checkoutModal');
    const closeBtn = document.getElementById('checkoutCloseBtn');
    const overlay = document.getElementById('checkoutOverlay');
    const form = document.getElementById('checkoutForm');

    if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
        closeCartDrawer();
        openCheckoutModal();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeCheckoutModal);
    if (overlay) overlay.addEventListener('click', closeCheckoutModal);

    if (form) {
        form.addEventListener('submit', handleOrderPlacement);
    }
}

function openCheckoutModal() {
    if (state.cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    const modal = document.getElementById('checkoutModal');
    const summaryList = document.getElementById('checkoutOrderItems');
    const totalEl = document.getElementById('checkoutTotalAmount');
    if (!modal) return;

    const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const shipping = subtotal >= 10000 ? 0 : 499;
    const finalTotal = subtotal + shipping;

    if (summaryList) {
        summaryList.innerHTML = state.cart.map(i => `
            <div class="checkout-item-summary">
                <img src="${i.image}" alt="${i.title}">
                <div class="chk-info">
                    <span class="chk-title">${i.title}</span>
                    <span class="chk-qty">Qty: ${i.quantity} • ${formatPrice(i.price * i.quantity)}</span>
                </div>
            </div>
        `).join('');
    }

    if (totalEl) totalEl.textContent = formatPrice(finalTotal);

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function handleOrderPlacement(e) {
    e.preventDefault();
    const btn = document.getElementById('btnPlaceOrder');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';
    }

    setTimeout(() => {
        const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
        const nameInput = document.getElementById('chkFullName');
        const customerName = nameInput ? nameInput.value : 'Valued Customer';

        // Clear Cart
        state.cart = [];
        saveCart();
        updateCartUI();
        initProductsGrid();

        // Show Success Step
        const formContainer = document.getElementById('checkoutFormContainer');
        if (formContainer) {
            formContainer.innerHTML = `
                <div class="order-success-card">
                    <div class="success-icon">
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <h2>Thank you, ${escapeHtml(customerName)}!</h2>
                    <p class="order-id">Order ID: <strong>#${orderId}</strong></p>
                    <p class="order-msg">Your order has been confirmed and is being packaged for express delivery via All In One Logistics.</p>
                    
                    <div class="order-summary-box">
                        <div><i class="fa-solid fa-truck"></i> Estimated Delivery: <strong>Tomorrow by 5 PM</strong></div>
                        <div><i class="fa-solid fa-shield-check"></i> Payment Status: <strong>Verified (Paid)</strong></div>
                    </div>

                    <button class="btn-continue-shopping" onclick="closeCheckoutModal(); location.reload();">
                        <i class="fa-solid fa-arrow-left"></i> Continue Shopping
                    </button>
                </div>
            `;
        }

        showToast(`Order #${orderId} Placed Successfully! 🎉`);
    }, 1200);
}

// 11. Deals Countdown Timer
function initDealsTimer() {
    const hoursEl = document.getElementById('dealHours');
    const minutesEl = document.getElementById('dealMinutes');
    const secondsEl = document.getElementById('dealSeconds');

    if (!hoursEl || !minutesEl || !secondsEl) return;

    let targetTime = new Date().getTime() + (5 * 60 * 60 * 1000) + (38 * 60 * 1000) + (45 * 1000);

    function update() {
        const now = new Date().getTime();
        const distance = targetTime - now;

        if (distance <= 0) {
            targetTime = new Date().getTime() + (8 * 60 * 60 * 1000); // Reset loop
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// 12. Toast Notification
function showToast(message) {
    let toast = document.getElementById('shopToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'shopToast';
        toast.className = 'shop-toast';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fa-solid fa-bell"></i> <span>${escapeHtml(message)}</span>`;
    toast.classList.add('visible');

    if (window._toastTimer) clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
        toast.classList.remove('visible');
    }, 3200);
}

// 13. Back to Top
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (btn) {
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// 14. Navbar Scroll State
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// 15. Preloader
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.style.display = 'none', 500);
        });
        // Fallback in case load already fired
        setTimeout(() => {
            if (preloader && preloader.style.display !== 'none') {
                preloader.classList.add('fade-out');
                setTimeout(() => preloader.style.display = 'none', 500);
            }
        }, 1500);
    }
}

// HTML Escaping Utility
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
