import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../features/cart/cartSlice";

const CourseList = () => {
  const { cartItems, quantity, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş...</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Sepetim</h2>
          </header>
        </section>
      )}
      {cartItems.map((item) => (
        <CourseItem {...item} key={item.id} />
      ))}
      <footer className="course-list-footer">
        <h1>
          Toplam tutar = <span>{total} ₺</span>
        </h1>
        <button onClick={() => dispatch(clearCart())}>Temizle</button>
      </footer>
    </>
  );
};

export default CourseList;
