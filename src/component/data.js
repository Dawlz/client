const products = [
    {
        name: "UNEO",
        price: 199,
        pictures: ["../Images/uneo1.png"],
        brief: "Unisex pack of 2",
        description: "100% Original Product",
        favorite: false
    },
    {
        name: "US Polo",
        price: 299,
        pictures: ["../Images/uspolo.png"],
        brief: "Unisex pack of 3",
        description: "100% Original Product",
        favorite: false
    },
    {
        name: "Hero",
        price: 199,
        pictures: ["../Images/hero1.png", "../Images/hero2.png"],
        brief: "Unisex pack of 2",
        description: "100% Original Product",
        favorite: false
    },
    {
        name: "UNEO",
        price: 199,
        pictures: ["../Images/uneogoodvibes.png"],
        brief: "Unisex pack of 2",
        description: "100% Original Product",
        favorite: false
    },
    {
        name: "Wild Craft",
        price: 150,
        pictures: ["../Images/wildcraft.png"],
        brief: "Unisex pack of 3",
        description: "100% Original Product",
        favorite: false
    }
]

var ordered = JSON.parse(localStorage.getItem('cartItems'))
var cart;
if (ordered) {
    cart = [...ordered]
}
else {
    cart=[]
}
function sumTotal(arr) {
    return arr.reduce((tally, item) => {
        return tally + item.price
    }, 0);
};

function getAllProducts() {
    return products;
}

function getProduct(idx) {
    return products[idx];
}

function addToCart(arr) {
    cart.push(arr);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    return cart
}

function getCart(){
    return cart
}



export {getAllProducts, getProduct, addToCart, sumTotal, getCart};