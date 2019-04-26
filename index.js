var cart = [];
  var a = {}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
  }
  var random = randomNumber()
  
  function updateObjectWithKeyAndValue(obj, key, value) {
    obj[key]=value
    return obj
  }

  updateObjectWithKeyAndValue(a, 'itemName', item);
  updateObjectWithKeyAndValue(a, 'itemPrice', random);
  
  cart.push(a);
  
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
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
