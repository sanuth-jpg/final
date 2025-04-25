// Add to Cart logic
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', function () {
    const product = this.closest('.product');
    const name = product.querySelector('h2').textContent.trim();
    const price = parseFloat(product.querySelector('p').textContent.replace(/[^0-9.]/g, ''));
    const quantity = parseInt(product.querySelector('.quantity').value) || 1;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ name, price, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  });
});

//Wishlist Button
document.querySelectorAll('.add-wishlist').forEach(button => {
  button.addEventListener('click', function() {
    const product = this.closest('.product');
    const name = product.querySelector('h2').textContent.trim();
    const price = parseFloat(product.querySelector('p').textContent.replace(/[^0-9.]/g, ''));

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push({ name, price });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    alert('Added to wishlist!');
  });
});
  
  
  
  
  