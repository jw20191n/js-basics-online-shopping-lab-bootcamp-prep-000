var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  itemPrice = Math.floor(Math.random() * 100) + 1;
  var itemObject = {[item]:itemPrice};
  cart.push(itemObject);
  
  return item + " has been added to your cart."
  
}

function viewCart() {
  var message = []
  if(cart.length === 0 ){
    return "Your shopping cart is empty."
  } else{
    for (let i=0;i<cart.length;i++){
      
      if (cart.length === 1){
        message.push(" " + cart[i].itemName + " at $" + cart[i].itemPrice) 
      }else{
        var num = cart.length - 1
        if(i===num){
          message.push(" and " + cart[i].itemName + " at $" + cart[i].itemPrice)
        } else {
          message.push(" " + cart[i].itemName + " at $" + cart[i].itemPrice) 
        }
      }
    }//end of for
    return "In your cart, you have" + message + "."
  }//end of else
}

function total() {
  let total = 0;
  for (let i=0;i<cart.length;i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
