// NAVIGATION
function goToLogin() {
  window.location.href = "login.html";
}

function goToRegister() {
  window.location.href = "index.html";
}

// REGISTER
function register() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill in all fields!");
    return;
  }

  // 🔐 PASSWORD LENGTH CHECK
  if (password.length < 8) {
    alert("Password must be at least 8 characters!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate username
  let exists = users.find(u => u.username === username);
  if (exists) {
    alert("Username already exists!");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully!");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  // manager login
  if (username === "admin" && password === "admin123") {
    window.location.href = "admin.html";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", username);
    window.location.href = "home.html";
  } else {
    // 🔥 improved error message
    alert("Invalid username or password!");
  }
}

function logout() {
  let confirmLogout = confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  }
}

// SECTION NAVIGATION
function showSection(sectionId, event = null) {
  // hide all sections
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
    sec.classList.remove("active");
  });

  // show selected
  const activeSection = document.getElementById(sectionId);
  if (activeSection) activeSection.style.display = "block";
  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll(".nav").forEach(btn => {
    btn.classList.remove("active");
  });

  if (event?.target) {
    event.target.classList.add("active");
  }
}

function setLocation() {
    let address = prompt("Enter your delivery address:");

    if (address && address.trim() !== "") {
        // save to localStorage
        localStorage.setItem("userAddress", address);

        // display on UI
        document.getElementById("userLocation").textContent = address;
    }
}

// Jollibee Menu Data - Authentic Items
const jollibeeMenu = [
    // Chickenjoy
    {
        id: 1,
        name: "1pc Chickenjoy",
        category: "chickenjoy",
        price: 129,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=1pc+Chickenjoy",
        description: "Crispy juicy bone-in chicken. Bawal ang BHCB!"
    },
    {
        id: 2,
        name: "Chickenjoy Bucket (6pcs)",
        category: "chickenjoy",
        price: 699,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Chickenjoy+Bucket",
        description: "Family bucket meal with rice & drinks"
    },
    {
        id: 3,
        name: "2pc Chickenjoy Meal",
        category: "chickenjoy",
        price: 249,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=2pc+Chickenjoy+Meal",
        description: "With rice & drink. Perfect combo!"
    },

    // Yumburger
    {
        id: 4,
        name: "Yumburger",
        category: "burgers",
        price: 79,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Yumburger",
        description: "Jollibee's best-selling burger with special dressing"
    },
    {
        id: 5,
        name: "Yumburger w/ Fries",
        category: "burgers",
        price: 129,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Yumburger+Fries",
        description: "Yumburger with Jolly Crispy Fries"
    },
    {
        id: 6,
        name: "Aloha Yumburger",
        category: "burgers",
        price: 99,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Aloha+Yumburger",
        description: "Yumburger with pineapple & cheese"
    },

    // Chicken Sandwiches
    {
        id: 7,
        name: "Chickenjoy Fillet Sandwich",
        category: "sandwiches",
        price: 149,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Chicken+Sandwich",
        description: "Crispy chicken fillet with special mayo"
    },
    {
        id: 8,
        name: "Cheesy Yumburger",
        category: "sandwiches",
        price: 89,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Cheesy+Yumburger",
        description: "Yumburger with melted cheese"
    },

    // Jolly Spaghetti & Sides
    {
        id: 9,
        name: "Jolly Spaghetti Solo",
        category: "sides",
        price: 79,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Jolly+Spaghetti",
        description: "Sweet & meaty spaghetti sauce"
    },
    {
        id: 10,
        name: "Jolly Crispy Fries (R)",
        category: "sides",
        price: 69,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Jolly+Fries",
        description: "Crispy seasoned fries regular size"
    },
    {
        id: 11,
        name: "Peach Mango Pie",
        category: "sides",
        price: 59,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Peach+Mango+Pie",
        description: "Crispy pie with sweet filling"
    },

    // Drinks
    {
        id: 12,
        name: "Coke Regular",
        category: "drinks",
        price: 59,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Coke+Regular",
        description: "Ice-cold Coca-Cola regular"
    },
    {
        id: 13,
        name: "Pineapple Quencher",
        category: "drinks",
        price: 69,
        image: "https://via.placeholder.com/300x220/FF6B35/FFFFFF?text=Pineapple+Quencher",
        description: "Refreshing pineapple juice"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const menuTitle = document.getElementById('menuTitle');
const cartToggle = document.getElementById('cartToggle');
const cartModal = document.getElementById('cartModal');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const subtotal = document.getElementById('subtotal');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const navLinks = document.querySelectorAll(".nav-btn");
const categoryCards = document.querySelectorAll(".category-card");

// Navigation Links
const filterBtns = document.querySelectorAll('.filter-btn');

// State
let currentFilter = 'all';
let shoppingCart = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderMenu(jollibeeMenu);
    setupEventListeners();
    updateCartUI();
    showSection("menu");
    setActiveFilter("all");
});

// Navigation Connection - Home, Chickenjoy, Yumburger, etc.
function setupEventListeners() {
    // Navigation buttons connection
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(l => l.classList.remove('active'));
            categoryCards.forEach(c => c.classList.remove('active'));
            filterBtns.forEach(f => f.classList.remove('active'));
            
            // Add active to clicked link
            link.classList.add('active');
            
            // Filter based on nav link text
            const navText = link.textContent.toLowerCase().replace(' ', '');
            
            let filterCategory;
            switch(navText) {
                case 'home':
                    filterCategory = 'all';
                    setCategory(filterCategory);
                    setActiveFilter(filterCategory);
                    break;
                case 'chickenjoy':
                    filterCategory = 'chickenjoy';
                    setCategory(filterCategory);
                    setActiveFilter(filterCategory);
                    break;
                case 'yumburger':
                case 'burgers':
                    filterCategory = 'burgers';
                    setCategory(filterCategory);
                    setActiveFilter(filterCategory);
                    break;
                case 'chickensandwiches':
                case 'sandwiches':
                    filterCategory = 'sandwiches';
                    setCategory(filterCategory);
                    setActiveFilter(filterCategory);
                    break;
                case 'sides':
                    filterCategory = 'sides';
                    setCategory(filterCategory);
                    setActiveFilter(filterCategory);
                    break;
                default:
                    filterCategory = 'all';
                    setCategory(filterCategory);
                    setActiveFilter(filterCategory);
            }
            
            filterMenu(filterCategory);
        });
    });

function setCategory(category) {
    menuTitle.textContent = menuTitles[category] || "All Menu Items";
}

//Filter Buttons
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        filterMenu(filter);
        setActiveFilter(filter);
    });
});

    // Category cards connection
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            navLinks.forEach(l => l.classList.remove('active'));
            categoryCards.forEach(c => c.classList.remove('active'));
            filterBtns.forEach(f => f.classList.remove('active'));
            
            card.classList.add('active');
            
            let title;
            switch(category) {
                case 'chickenjoy': title = 'Chickenjoy'; break;
                case 'burgers': title = 'Yumburgers'; break;
                case 'sandwiches': title = 'Chicken Sandwiches'; break;
                case 'sides': title = 'Sides & Desserts'; break;
                default: title = 'All Menu Items';
            }
            
            menuTitle.textContent = title;
            filterMenu(category);
        });
    });

    // Cart functionality
    cartToggle.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    // Checkout
    document.addEventListener("DOMContentLoaded", () => {
    const checkoutBtn = document.getElementById("checkoutBtn");

    if (!checkoutBtn) {
        console.log("Checkout button not found in HTML");
        return;
    }

    checkoutBtn.addEventListener("click", placeOrder);
});
}

// Render all menu items
function renderMenu(items) {
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price-section">
                    <div class="price">₱${item.price}</div>
                </div>
                <button class="add-to-cart" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Filter menu items
function filterMenu(category) {
  const items = category === "all"
    ? jollibeeMenu
    : jollibeeMenu.filter(item => item.category === category);

  renderMenu(items);
}

// Cart Functions
function addToCart(itemId) {
    const item = jollibeeMenu.find(i => i.id === itemId);
    const existingItem = shoppingCart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        shoppingCart.push({ ...item, quantity: 1 });
    }
    
    updateCartUI();
    showNotification(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    shoppingCart = shoppingCart.filter(item => item.id !== itemId);
    updateCartUI();
    renderCartItems();
}

function setActiveFilter(filter) {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {
    btn.classList.remove("active");

    if (btn.dataset.filter === filter) {
      btn.classList.add("active");
    }
  });

  const menuTitle = document.getElementById("menuTitle");

  const titles = {
    all: "All Menu Items",
    chickenjoy: "Chicken Joy",
    burgers: "Yumburgers",
    sides: "Sides & Desserts"
  };

  menuTitle.textContent = titles[filter];
}

function updateQuantity(itemId, change) {
    const item = shoppingCart.find(item => item.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartUI();
            renderCartItems();
        }
    }
}

function updateCartUI() {
    const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotalAmount = shoppingCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    subtotal.textContent = subtotalAmount.toFixed(2);
    cartTotal.textContent = (subtotalAmount + 50).toFixed(2); // + delivery fee
    checkoutTotal.textContent = (subtotalAmount + 50).toFixed(2);
    
    checkoutBtn.disabled = totalItems === 0;
}

function renderCartItems() {
    if (shoppingCart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <button class="order-btn" onclick="filterMenu('all')">Start Ordering</button>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = shoppingCart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-price">₱${(item.price * item.quantity).toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="qty-btn" style="background:#FF6B35;color:white;margin-left:1rem;" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    if (cartModal.style.display === 'block') {
        renderCartItems();
    }
}

function showNotification(message) {
    // Simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: linear-gradient(135deg, #FF6B35, #F54B1E);
        color: white;
        padding: 1rem 2rem;
        border-radius: 15px;
        box-shadow: 0 15px 40px rgba(255,107,53,0.4);
        z-index: 3000;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => document.body.removeChild(notification), 400);
    }, 3000);
}

// Mobile responsiveness
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        document.querySelector('.mobile-menu-toggle').style.display = 'block';
        document.querySelector('.nav-menu').style.display = 'none';
    } else {
        document.querySelector('.mobile-menu-toggle').style.display = 'none';
        document.querySelector('.nav-menu').style.display = 'flex';
    }
});

document.addEventListener("DOMContentLoaded", () => {
  showSection("menu");
  const savedAddress = localStorage.getItem("userAddress");
  filterMenu("all");
  setActiveFilter("all");;

    if (savedAddress) {
        document.getElementById("userLocation").textContent = savedAddress;
    }
});