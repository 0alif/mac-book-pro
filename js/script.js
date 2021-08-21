

function extraCost(idName, value) {
    const previousCost = document.getElementById(idName);
    previousCost.innerText = value;
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

// Pomo code

