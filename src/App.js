import React, { useState } from 'react'
import Nav from './components/nav'
import Rout from './components/rout'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer'
import Productdetail from './components/productdetail';
const App = () => {
  // add to cart 
  const [cart, setCart] = useState([])
  //product Details
  const [close, setClose] = useState(false)
  const [detail, setDetails] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => {
    setDetails([{ ...product }])
    setClose(true)
  }

  //add to cart
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id
    })
    if (exsit) {
      alert("This Product is already added to cart")
    }
    else {
      setCart([...cart, { ...product, qty: 1 }])
      alert("Product is added to cart")
    }
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
