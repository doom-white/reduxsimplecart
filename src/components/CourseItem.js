import React from "react";

const CourseItem = (props) => {
  const { img, price, quantity, title } = props;
  return (
    <div className="course-list">
      <div className="course-list-leftSide">
        <img src={img} alt="cartItemsImages" />
        <p>{title}</p>
      </div>
      <div className="course-list-rightSide">
        <p>{price} ₺</p>
        <div className="course-list-control">
          <button className="btn-increase">+</button>
          <span className="course-list-quantity">{quantity}</span>
          <button className="btn-decrease">-</button>
        </div>
        <button className="btn-delete">Sil</button>
      </div>
    </div>
  );
};

export default CourseItem;
