function loadWishlist() {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  let tableBody = document.querySelector('#wishlist-table tbody');
  tableBody.innerHTML = '';

  wishlist.forEach(item => {
    let row = `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

loadWishlist();

function clearWish() {
  localStorage.removeItem('wishlist'); // Remove the cart from localStorage
  loadWishlist();
}