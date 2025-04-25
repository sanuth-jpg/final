
    function loadCart() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let tableBody = document.querySelector('#cart-table tbody');
      let finalTotal = 0;
      tableBody.innerHTML = '';

      cart.forEach(item => {
        let total = item.price * item.quantity;
        finalTotal += total;
        let row = `
          <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>$${total}</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });

      document.getElementById('final-total').innerText = `Total: $${finalTotal}`;
      localStorage.setItem('finalTotal', finalTotal); // Save total
    }

    loadCart();

    function clearCart() {
  localStorage.removeItem('cart'); // Remove the cart 
  loadCart();
  document.getElementById('final-total').innerText = 'Total: $0.00'; // Reset total
}


function clearCart() {
  localStorage.removeItem("cart");
  loadCart();

  // Disable checkout link immediately
  const checkoutLink = document.getElementById("checkout-link");
  if (checkoutLink) {
    checkoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Your cart is empty. Add some items before proceeding to checkout.");
    });
    checkoutLink.style.opacity = "0.6";
    checkoutLink.style.cursor = "not-allowed";
  }
}



function applyFavouriteOrder() {
  const favourite = JSON.parse(localStorage.getItem("favouriteOrder") || "[]");
  if (!favourite.length) {
    alert("No favourite order saved.");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = [...cart, ...favourite]; // Allow duplicates
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  alert("Favourite order added to cart.");
  location.reload(); // Reload the cart page to show updates
}





function saveAsFavouriteOrder() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  localStorage.setItem("favouriteOrder", JSON.stringify(cart));
  alert("Favourite order saved!");
}


document.addEventListener("DOMContentLoaded", () => {
  const checkoutLink = document.getElementById("checkout-link");
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (!cart.length) {
    checkoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Your cart is empty. Add some products before checking out.");
    });

    //styling to show it's inactive
    checkoutLink.style.pointerEvents = "auto";
    checkoutLink.style.opacity = "0.6";
    checkoutLink.style.cursor = "not-allowed";
  }
});

