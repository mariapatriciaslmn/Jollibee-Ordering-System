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
    window.location.href = "manager.html";
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

// MENU
let menu = [
  { id: 1, name: "Chickenjoy", price: 120 },
  { id: 2, name: "Spaghetti", price: 90 },
  { id: 3, name: "Burger Steak", price: 75 }
];

function displayMenu() {
  let menuDiv = document.getElementById("menu");

  menuDiv.innerHTML = menu.map(item => `
    <div>
      <h3>${item.name}</h3>
      <p>₱${item.price}</p>
      <button onclick="addToCart(${item.id})">Add</button>
    </div>
  `).join("");
}

// CART
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = menu.find(m => m.id === id);

  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartDiv = document.getElementById("cart");

  cartDiv.innerHTML = cart.map((item, i) => `
    <div>
      ${item.name} - ₱${item.price}
      <button onclick="removeItem(${i})">Remove</button>
    </div>
  `).join("");
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// CHECKOUT
function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart empty!");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    id: Date.now(),
    user: localStorage.getItem("currentUser"),
    items: cart,
    status: "Pending"
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("Order placed!");
  displayCart();
}

// MANAGER
function loadOrders() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  let div = document.getElementById("orders");

  div.innerHTML = orders.map(order => `
    <div>
      <p>ID: ${order.id}</p>
      <p>User: ${order.user}</p>
      <p>Status: ${order.status}</p>

      <button onclick="updateStatus(${order.id}, 'Preparing')">Preparing</button>
      <button onclick="updateStatus(${order.id}, 'Delivering')">Delivering</button>
      <button onclick="updateStatus(${order.id}, 'Delivered')">Delivered</button>
    </div>
  `).join("");
}

function updateStatus(id, status) {
  let orders = JSON.parse(localStorage.getItem("orders"));

  let order = orders.find(o => o.id === id);
  order.status = status;

  localStorage.setItem("orders", JSON.stringify(orders));
  loadOrders();
}