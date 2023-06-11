import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/CartContainer";
import { NavBar } from "./components/NavBar";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";


const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems, dispatch])

  useEffect(() => {
    dispatch(getCartItems())
  },[dispatch])

  if(isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen && 
      <Modal/>}
      <NavBar/>
      <CartContainer/>
    </main>
  )
}

export default App
