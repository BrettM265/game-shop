import React from 'react'

function Cart() {

const productArray = "productList"
let storedProducts = JSON.parse(localStorage.getItem(productArray))

function openCart(){
document.getElementById("cpl").style.display = "block"
}

const clearAll = () =>  {
  localStorage.removeItem("productList")
  window.location.reload(false);
  }
return(
  <>
  <div className="cart-accordian">
  <button className="cart-button" onClick={openCart}>Cart ({storedProducts != null ? storedProducts.length: 0})</button>
  <div className="cart-products-list" id="cpl">
{ storedProducts != null ?     
  <div className="cart-sideBar">
  {storedProducts.map((products)=>{

    return(
      <>
    <div className="sideBar-products">
    <div className="cart-left">
    <img className="cart-image" src={products.image}></img>
    <p className="cart-product-details">{products.name}</p>
    </div>
    <div className="cart-right">
    <p>${products.price}</p>
    <input
    type="value"
    id="amount"
    placeholder="1"/>
    </div>
    </div>
    </>
  )})}
  <button onClick={clearAll}>Remove All</button>
  </div>
   : <p>Cart is Empty</p> }
   </div>
   </div>
  </>
    )}
export default Cart