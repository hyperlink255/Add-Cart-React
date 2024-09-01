

import './style.css'
import { useEffect, useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Products } from './Components/Product'
import { Cart } from './Components/Mycart'
import { Productdetail } from './Components/Productdetail'
import { Footer } from './Components/Footer'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  

function App() {
  const [addcart, setaddcart] = useState([])
  const [showproduct, setshowproduct] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [showitem, setshowItem] = useState([])


 
  const addToCart = (data) => {
    setaddcart([...addcart, data])
  }

  
  const handleAmount = (item, value) => {

    const updatedAmount = addcart.map((item1) => {
      if (item1.id === item.id) {

        item1.qty += value

        if (item1.qty < 1) {
          item1.qty = 1;
        }
        else if (item1.qty > 10) {
          item1.qty = 10;
        }
      }
      return item1;
    })
    setaddcart([...updatedAmount])
  }

  useEffect(() => {
    handleSubTotal()
  })
  // SubTotal amount
  const handleSubTotal = () => {
    let sum = 0;
    addcart.forEach(element => {
      sum += element.qty * element.price
      setSubTotal(sum)
    })
  }


  // delete 
  const handleDelete = (index) => {
    const updatedList = [...addcart]
    updatedList.splice(index, 1)
    setaddcart(updatedList);

  }

  // Calculate Total Amount
  const TotalAmount = (i) => {
    let amount = i.price * i.qty;
    return amount;
  };

  const ProductShow = (product) => {
    setshowproduct([{ ...product }])


  }


  // show card items
  const handleCart = (prd) => {
    if (showitem.includes(prd.id)) {
      toast.error(`This product is already added to cart`);
    } else {
      setaddcart([...addcart, prd]); // Append the new product to the existing array
      setshowItem([...showitem, prd.id]);
    toast.success("`product added to cart`")

    }
  }

  return (
    <BrowserRouter>
      <>  
        <Navbar count={addcart.length} />
        <Outlet/>
        <Routes>
          <Route path="/" element={<Products addcart={addToCart} ProductShow={ProductShow} handleCart={handleCart} />} />
          <Route path="/cart" element={<Cart addcart={addcart} count={addcart.length} amount={handleAmount} subTotal={subTotal} DeleteHandler={handleDelete} TotalAmount={TotalAmount} />} />
          <Route path="/product/:id/:name" element={<Productdetail showproduct={showproduct} handleCart={handleCart} />} />
        </Routes>
        <Footer/>
        <ToastContainer/>
       </>
    </BrowserRouter>
    
  )
}

export default App
