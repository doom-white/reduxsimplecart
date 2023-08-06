import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div>
      <Navbar />
      <CourseList />
    </div>
  );
};

export default App;
