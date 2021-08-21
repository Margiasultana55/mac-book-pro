
// total price calculation
function CalculateTotal() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryPrice = parseInt(document.getElementById('memory-price').innerText);
    const storagePrice = parseInt(document.getElementById('storage-price').innerText);
    const deliveyPrice = parseInt(document.getElementById('delivery-charge').innerText);
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveyPrice;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('subtotal').innerText = totalPrice;
    return totalPrice;



}

// memory price 
document.getElementById('small-memory').addEventListener('click', function () {

    document.getElementById('memory-price').innerText = 0;
    CalculateTotal();

})
document.getElementById('big-memory').addEventListener('click', function () {

    document.getElementById('memory-price').innerText = 180;
    CalculateTotal();

})
// storage price 
document.getElementById('256GB-sd').addEventListener('click', function () {

    document.getElementById('storage-price').innerText = 0;
    CalculateTotal();

})
document.getElementById('512GB-sd').addEventListener('click', function () {

    document.getElementById('storage-price').innerText = 100;
    CalculateTotal();

})
document.getElementById('1TB-sd').addEventListener('click', function () {

    document.getElementById('storage-price').innerText = 180;
    CalculateTotal();

})

// delivery charge 
document.getElementById('free-delivery').addEventListener('click', function () {

    document.getElementById('delivery-charge').innerText = 0;
    CalculateTotal();

})
document.getElementById('paid-delivery').addEventListener('click', function () {

    document.getElementById('delivery-charge').innerText = 20;
    CalculateTotal();

})

// promo code 
document.getElementById('code-button').addEventListener('click', function () {
    const codeInput = document.getElementById('code-input').value;
    if (codeInput == 'stevekaku') {
        const totalPrice = CalculateTotal();
        const discountPrice = totalPrice - (totalPrice * 0.2);
        document.getElementById('subtotal').innerText = discountPrice;

    }

})