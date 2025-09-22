// Create a Array of 5 Objects

let products = [
    {name:'Keyboard', category:'electronics', price: 21.99, inventory: 142},
    {name:'Hoodie', category: 'apparel', price: 14.99, inventroy: 201},
    {name:'Apple', category:'groceries', price: 1.99, inventory: 607},
    {name:'Lamp', category:'household', price: 10.99, inventory: 93},
    {name:'Hammer', category: 'hardware', price: 12.99, inventory: 481}
];

// Make for...of loop and Switc statement that applies a discount based on a category 
for (let product of products) {
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = .2    
            break;
            case "apparel" :
                discount = .15
            break;
            case "groceries" :
            case "household" :
            discount = .1
            break;
            default:
            discount = 0
            break;
    }
let promoPrice = product.price * (1-discount)
product.promoPrice = promoPrice;
}
console.log(products)

// if...else if chain to apply aditional discount
let customerType= customerTypes[i];
let extraDiscount = 0;

if (customerType = "senior") {
    extraDiscount = .07;
} else if (customerType = "student"){
    extraDiscount = .05;
} else {
extraDiscount = 0
}

let customerTypes = ['regular', 'student', 'senior'];

for (let i = 0; i < 3; i++) {
let subTotal = 0;
for(let product of products) {
    if(product.inventory> 0 ) {
    subTotal += product.price;
    product.inventory--;
}
}
 let finalTotal = subTotal * (1-extraDiscount);
}

