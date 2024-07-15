document.addEventListener('DOMContentLoaded', function () {
    // Function to update the total price
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.card-body').forEach(card => {
            const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
            const quantity = parseInt(card.querySelector('.quantity').textContent);
            total += unitPrice * quantity;
        });
        document.querySelector('.total').textContent = `${total.toFixed(2)} $`;
    }

    // Add event listeners to all plus buttons
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
        button.addEventListener('click', function () {
            const quantityElem = this.nextElementSibling;
            let quantity = parseInt(quantityElem.textContent);
            quantityElem.textContent = ++quantity;
            updateTotalPrice();
        });
    });

    // Add event listeners to all minus buttons
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
        button.addEventListener('click', function () {
            const quantityElem = this.previousElementSibling;
            let quantity = parseInt(quantityElem.textContent);
            if (quantity > 0) {
                quantityElem.textContent = --quantity;
                updateTotalPrice();
            }
        });
    });

    // Add event listeners to all trash buttons
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', function () {
            const cardBody = this.closest('.card-body');
            const quantityElem = cardBody.querySelector('.quantity');
            quantityElem.textContent = '0';
            updateTotalPrice();
        });
    });

    // Add event listeners to all heart buttons
    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('liked');
            this.style.color = this.classList.contains('liked') ? 'red' : 'black';
        });
    });

    // Initial update of total price on page load
    updateTotalPrice();
});