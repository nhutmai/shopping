import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { check } from "../../../redux/Slice/carCheckbox";
function GoodsList(props) {
  var isChecked = useSelector((state) => state.cartcheckbox.isChecked);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    if (isChecked) {
      dispatch(check());
    }
    console.log(isChecked);
    setChecked(!checked);
    e.target.setAttribute("checked", !e.target.checked);
  };

  return (
    <div className="goodslist">
      {props.goods.map((good) => (
        <div key={good.id} className="good">
          <div className="good_name">
            <input
              key={good.id}
              type="checkbox"
              name="checkall"
              className="good_name-check"
              checked={checked}
              onClick={handleCheckboxChange}
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
