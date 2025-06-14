const shoppingData = {
    items: [
        {
            "name": "Bottle",
            "price": 199,
            "quantity": 2
        },
        {
            "name": "Box",
            "price": 49,
            "quantity": 1
        },
        {
            "name": "Pen",
            "price": 19,
            "quantity": 3
        },
        {
            "name": "Notebook",
            "price": 99,
            "quantity": 12
        }
    ]
};
const jsonString = JSON.stringify(shoppingData, null, 2);
console.log("--- Complete JSON String Output ---");
console.log(jsonString);
console.log("\n--- Original JavaScript Object (for comparison) ---");
console.log(shoppingData);