const ORDER_ADDRESS = "orders@examplewebsite142.com";

function buildMailto(subject, body) {
    const mailtoUrl = `mailto:${ORDER_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}

const orderBtn = document.getElementById('orderNowBtn');

orderBtn?.addEventListener("click", function () {

    const product = document.querySelector("#productTitle")?.textContent;
    const color = document.querySelector("#selectedColor")?.textContent;
    const size = document.querySelector("#sizeSelect")?.value;
    const qty = parseInt(document.querySelector("#qtySelect")?.value);

    const unitPrice = 499;
    const total = unitPrice * qty;
    const shippingNote = total >= 1000 ? "FREE SHIPPING Qualified!" : "Standard Shipping Applies";

    const subject = `NEW ORDER! ${product} (${color}, ${size}) x${qty}`;
    const body =
`Greetings, Malaya Team!

I would like to place an order:

--- ORDER DETAILS ---
Item: ${product}
Color: ${color}
Size: ${size}
Quantity: ${qty}
Estimated Total: ₱${total.toLocaleString("en-PH", { minimumFractionDigits: 2 })} (${shippingNote})

--- CUSTOMER INFORMATION ---
Full Name: 
Contact Number: 
Complete Delivery Address: 
Preferred Payment Method (GCash / Maya / Bank Transfer / COD): 

Thank you very much!`;

    buildMailto(subject, body);
});