import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
  removeItem,
} from "../features/cart/cartSlice";

const CourseItem = (props) => {
  const { id, img, price, quantity, title } = props;
  const dispatch = useDispatch();
  return (
    <div className="course-list">
      <div className="course-list-leftSide">
        <img src={img} alt="cartItemsImages" />
        <p>{title}</p>
      </div>
      <div className="course-list-rightSide">
        <p>{price} ₺</p>
        <div className="course-list-control">
          <button
            className="btn-increase"
            onClick={() => dispatch(increaseItemCount(id))}
          >
            +
          </button>
          <span className="course-list-quantity">{quantity}</span>
          <button
            className="btn-decrease"
            onClick={() => dispatch(decreaseItemCount(id))}
          >
            -
          </button>
        </div>
        <button className="btn-delete" onClick={() => dispatch(removeItem(id))}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
