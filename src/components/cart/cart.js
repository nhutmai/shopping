import React from "react";
import "./style.css";
import Goodslist from "./goodslist/goodslist";
function Cart() {
  const goods = [
    {
      name: "ca chua",
      image: "image 1",
      description: "description 1",
      price: 20000,
      unit: "kg",
      id: "1",
    },
    {
      name: "dua",
      image: "image 2",
      description: "description 2",
      price: 1500,
      unit: "qua",
      id: "2",
    },
    {
      name: "pet",
      image: "image 3",
      description: "tặng không lấy tiền",
      price: 0,
      unit: "con",
      id: "3",
    },
    {
      name: "name 4",
      image: "image 4",
      description: "description 4",
      price: 79,
      unit: "unit 4",
      id: "4",
    },
    {
      name: "name 5",
      image: "image 5",
      description: "description 5",
      price: 8,
      unit: "unit 5",
      id: "5",
    },
    {
      name: "name 6",
      image: "image 6",
      description: "description 6",
      price: 42,
      unit: "unit 6",
      id: "6",
    },
    {
      name: "name 7",
      image: "image 7",
      description: "description 7",
      price: 77,
      unit: "unit 7",
      id: "7",
    },
    {
      name: "name 8",
      image: "image 8",
      description: "description 8",
      price: 92,
      unit: "unit 8",
      id: "8",
    },
    {
      name: "name 9",
      image: "image 9",
      description: "description 9",
      price: 50,
      unit: "unit 9",
      id: "9",
    },
  ];
  return (
    <div className="cart">
      <div className="cart_goodslist">
        <h3 className="giohang">GIỎ HÀNG</h3>
        <div className="menubar">
          <div className="bar_1">
            <input type="checkbox" name="checkall" />
            <label name="checkall" className="checkall">
              Tất cả
            </label>
          </div>
          <p className="bar_2">Đơn giá</p>
          <p className="bar_3">Số lượng</p>
          <p className="bar_4">Thành tiền</p>
          <button className="deletebutton">Xóa</button>
        </div>
        <div className="goodlist">
          <Goodslist goods={goods} />
        </div>
      </div>
      <div className="cart_infolist">
        <div className="infolist_1">Giao tới</div>
        <div className="infolist_2">
          <div>Số lượng mặt hàng đã chọn</div>
          <div>Tổng tiền</div>
        </div>
        <button className="infolist_3">Mua Hàng</button>
      </div>
    </div>
  );
}
export default Cart;
