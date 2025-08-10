// Booking Modal Functions
        function openModal(eventTitle) {
            document.getElementById('modalEventTitle').textContent = eventTitle;
            document.getElementById('bookingModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
            resetForm();
        }

        function closeModal() {
            document.getElementById('bookingModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function resetForm() {
            document.getElementById('bookingForm').reset();
            document.getElementById('generalQuantity').value = 0;
            document.getElementById('premiumQuantity').value = 0;
            document.getElementById('vipQuantity').value = 0;
            document.getElementById('totalAmount').textContent = '0.00';
        }

        // Quantity Adjustment
        function adjustQuantity(ticketType, change) {
            const quantityElement = document.getElementById(ticketType + 'Quantity');
            let quantity = parseInt(quantityElement.value);
            quantity += change;
            
            if (quantity < 0) quantity = 0;
            
            quantityElement.value = quantity;
            calculateTotal();
        }

        // Calculate Total Price
        function calculateTotal() {
            const generalQty = parseInt(document.getElementById('generalQuantity').value);
            const premiumQty = parseInt(document.getElementById('premiumQuantity').value);
            const vipQty = parseInt(document.getElementById('vipQuantity').value);
            
            const generalPrice = 49.99;
            const premiumPrice = 129.99;
            const vipPrice = 299.99;
            
            const total = (generalQty * generalPrice) + (premiumQty * premiumPrice) + (vipQty * vipPrice);
            
            document.getElementById('totalAmount').textContent = total.toFixed(2);
        }

        // Confirm Booking
        function confirmBooking() {
            const total = parseFloat(document.getElementById('totalAmount').textContent);
            
            if (total <= 0) {
                alert('Please select at least one ticket.');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show the confirmation modal
            
            closeModal();
            document.getElementById('confirmationModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Close Confirmation Modal
        function closeConfirmation() {
            document.getElementById('confirmationModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            if (event.target == document.getElementById('bookingModal')) {
                closeModal();
            }
            if (event.target == document.getElementById('confirmationModal')) {
                closeConfirmation();
            }
        }