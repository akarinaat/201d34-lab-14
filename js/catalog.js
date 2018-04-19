/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionItem = document.createElement('option');
    optionItem.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionItem);
    selectElement.add(optionItem);

  }
}
//TODO: Add an <option> tag inside the form's select for each product




// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  var items = event.target.items.value;
  var quantity = event.target.quantity.value;
  Product.quantityTotal += Number(quantity);
  document.getElementById('catalog').reset();
  

  // TODO: Prevent the page from reloading
  // Do all the things ...
  addSelectedItemToCart(items, quantity);
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(itemParam, quantityParam) {
  // TODO: suss out the item picked from the select list

  // TODO: get the quantity
  // TODO: using those, create a new Cart item instance
  var newOrder = new Cart(itemParam, quantityParam);

  Product.cartArr.push(newOrder);
}

// TODO: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
  Product.stringified = JSON.stringify(Product.cartArr);
  localStorage.setItem('results', Product.stringified);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var cartCount = document.getElementById('itemCount');
  var quantityTotalString = document.createTextNode(Product.quantityTotal);
  cartCount.appendChild(quantityTotalString);



}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
