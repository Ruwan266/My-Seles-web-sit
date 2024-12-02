// cart.js

// Sample cart items
const cart = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    { id: 3, name: 'Product 3', price: 30, quantity: 3 },
  ];
  
  // Render cart items to the page
  function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
  
    // Clear the previous content
    cartItemsContainer.innerHTML = '';
  
    // Loop through cart and create table rows
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>
          <input type="number" value="${item.quantity}" class="form-control" data-id="${item.id}" min="1" onchange="updateQuantity(event)">
        </td>
        <td>$${itemTotal}</td>
        <td><button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button></td>
      `;
      cartItemsContainer.appendChild(row);
    });
  
    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
  }
  
  // Update the quantity of a product
  function updateQuantity(event) {
    const productId = event.target.getAttribute('data-id');
    const quantity = parseInt(event.target.value, 10);
    
    const product = cart.find(item => item.id == productId);
    if (product) {
      product.quantity = quantity;
    }
    renderCart();
  }
  
  // Remove an item from the cart
  function removeItem(productId) {
    const productIndex = cart.findIndex(item => item.id == productId);
    if (productIndex > -1) {
      cart.splice(productIndex, 1);
    }
    renderCart();
  }
  
  // Initialize the cart page
  renderCart();
  