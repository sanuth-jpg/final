function getDeliveryDate() {
  const today = new Date();
  today.setDate(today.getDate() + 3);
  return today.toDateString();
}

document.getElementById('buy-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value.trim();
  const postal = document.getElementById('postal').value.trim();
  const card = document.getElementById('card').value.trim();
  const expiry = document.getElementById('expiry').value.trim();
  const cvv = document.getElementById('cvv').value.trim();

  if (!name || !email || !address || !city || !postal || !card || !expiry || !cvv) {
    alert('Please fill in all the required fields.');
    return;
  }

  const deliveryDate = getDeliveryDate();
  alert(`Thank you for your purchase, ${name}!\nYour order will be delivered by ${deliveryDate}.`);

  localStorage.removeItem('cart');
  window.location.href = 'index.html';
});




document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const tableBody = document.querySelector("#cart-table tbody");

  if (!cart.length) {
    tableBody.innerHTML = '<tr><td colspan="4">Your cart is empty.</td></tr>';
    return;
  }

  let grandTotal = 0;
  cart.forEach(item => {
    const total = item.price * item.quantity;
    grandTotal += total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>$${total.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td colspan="3" style="text-align: right;"><strong>Grand Total:</strong></td>
    <td><strong>$${grandTotal.toFixed(2)}</strong></td>
  `;
  tableBody.appendChild(totalRow);
});
