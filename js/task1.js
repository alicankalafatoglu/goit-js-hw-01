function makeTransaction(a, b) {
     quantity = (Number(a)); //sipariş edilen droid
     pricePerDroid = (Number(b)); //sipariş edilen droid

    let text = (`You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`);

   return text;

   //FARKLI ŞEKİLLERDE DENEDİM HOCAM OLUYORMU DİYE SADECE 2. JSDEDE FARKLI Bİ ŞEKİLDE.
    
}

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500)); 