function extraCost(idName, value) {
    const previousCost = document.getElementById(idName);
    previousCost.innerText = value;
}

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

// total price

/* const mainCostText = document.getElementById('best-price').innerText;
const mainCost = parseInt(mainCostText);

const memoryCostText = document.getElementById('memory-cost').innerText;
const memoryCost = parseInt(memoryCostText);

const storageCostText = document.getElementById('storage-cost').innerText;
const storageCost = parseInt(storageCostText);

const deliveryCostText = document.getElementById('delivery-charge').innerText;
const deliveryCost = parseInt(deliveryCostText);

let currentBalance = document.getElementById('best-price').innerText;
let totalBalance = document.getElementById('total-price').innerText;
totalBalance.innerText = mainCost + memoryCost + storageCost + deliveryCost + parseInt(currentBalance);
 */
// console.log(totalPrice);
// document.getElementById('total-price').innerText = totalPrice;
// document.getElementById('total').innerText = totalPrice;





// Promo code
document.getElementById('apply-btn').addEventListener('click', function () {
    const pomoCode = document.getElementById('pomo-code');
    promoCode(pomoCode);
});

