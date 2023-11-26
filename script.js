//  add to card javascript
let modalQuantity = 1;
let modalItemImage = document.getElementById('modalItemImage');
let modalQuantityElement = document.getElementById('modalQuantity');

function incrementQuantity() {
    modalQuantity++;
    modalQuantityElement.textContent = modalQuantity;
}

function decrementQuantity() {
    if (modalQuantity > 1) {
        modalQuantity--;
        modalQuantityElement.textContent = modalQuantity;
    }
}

function addToCart() {
    const image = modalItemImage.src;
    const quantity = modalQuantity;
    
    // Perform actions with image and quantity (e.g., add to cart)
    console.log('Item added to cart - Image:', image, 'Quantity:', quantity);

    // Close the modal after adding to cart
    const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
    modal.hide();
}

// Handling modal opening to set image dynamically
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const image = button.getAttribute('data-image');
        modalItemImage.src = image;
        modalQuantity = 1;
        modalQuantityElement.textContent = modalQuantity;
    });
});


//  add to card javascript
