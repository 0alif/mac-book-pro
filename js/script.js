// Extra price
function extraCost(idName, value) {
    const previousCost = document.getElementById(idName);
    previousCost.innerText = value;
    calculateTotal();
}

// get input value
function getValue(inputId) {
    const inputValue = document.getElementById(inputId).innerText;
    const value = parseInt(inputValue);
    return value;
}

// calculate total price
function calculateTotal() {
    const mainCost = getValue('best-price');
    const memoryCost = getValue('memory-cost');
    const storageCost = getValue('storage-cost');
    const deliveryCost = getValue('delivery-charge');
    const totalPrice = mainCost + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
}

// if Promo code added
function promoCode(inputText) {
    if (inputText.value == 'stevekaku') {
        const subTotalElement = document.getElementById('total-price');
        const totalElement = document.getElementById('total');
        const subTotal = subTotalElement.innerText;
        const grandTotal = subTotal - (subTotal * 20 / 100);
        totalElement.innerText = grandTotal;
    }
    inputText.value = '';
}


// memory cost
document.getElementById('memory-8gb').addEventListener('click', function () {
    extraCost('memory-cost', 0);
});

document.getElementById('memory-16gb').addEventListener('click', function () {
    extraCost('memory-cost', 180);
});

// Storage cost
document.getElementById('ssd-256').addEventListener('click', function () {
    extraCost('storage-cost', 0);
});

document.getElementById('ssd-512').addEventListener('click', function () {
    extraCost('storage-cost', 100);
});

document.getElementById('ssd-1tb').addEventListener('click', function () {
    extraCost('storage-cost', 180);
});

// delivery charge
document.getElementById('freeDelivery').addEventListener('click', function () {
    extraCost('delivery-charge', 0);
});

document.getElementById('paidDelivery').addEventListener('click', function () {
    extraCost('delivery-charge', 20);
});

// Promo code
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoCodeText = document.getElementById('promo-code');
    promoCode(promoCodeText);
});