function getShippingMessage (a, b, c) {
    // country = (String("a")) //teslimatın yapılacağı ülke paremetresi
    // price = (Number(b)) //toplam ürün maliyet paremetresi
    // deliveryFee = (Number(c)) //ürün teslimat maliyeti parametresı



    let text = `Shipping to ${a} will cost ${b + c} credits`;

    return text;
}

console.log(getShippingMessage("Australia", 120, 50)); 
console.log(getShippingMessage("Germany", 80, 20)); 
console.log(getShippingMessage("Sweden", 100, 20)); 