import React from "react";
import "./style.css";
function GoodsList(props) {
  return (
    <div className="goodslist">
      {props.goods.map((good) => (
        <div key={good.id} className="good">
          <div className="good_name">
            <input
              type="checkbox"
              name="checkall"
              className="good_name-check"
            />
            <img src={good.image} alt={good.name} className="good_name-img" />
            <div className="good_name-name">{good.name}</div>
          </div>
          <div className="good_price">
            {good.price}vnd/{good.unit}
          </div>
          <div className="good_numbers"> số lượng</div>
          <div className="good_totalprice">tổng tiền</div>
          <button className="clear">xóa</button>
        </div>
      ))}
    </div>
  );
}

export default GoodsList;
