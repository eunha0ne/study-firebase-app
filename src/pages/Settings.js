import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { dbService } from "app/firebaseInstance";

import { showModal } from "features/Modal/modalSlice";

const Settings = ({ user }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stock, setStock] = useState([]);

  const onChange = ({ target }) => {
    const { name, value } = target;

    if (name === "name") {
      setName(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "quantity") {
      setQuantity(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(user);
      await dbService.collection("stock").add({
        name: name,
        price: price,
        quantity: quantity,
        maintainer: user.uid
      });
    } catch (error) {
      dispatch(
        showModal({
          message: error.message
        })
      );
    } finally {
      setName("");
      setPrice("");
      setQuantity("");
    }
  };

  const getStockItems = async () => {
    let data = [];
    const response = await dbService.collection("stock").get();
    response.forEach((document) => {
      data.push(document.data());
    });

    return data;
  };

  useEffect(() => {
    getStockItems().then((data) => {
      setStock(data);
    });
  }, []);

  return (
    <section>
      <header>
        <h2>실시간 재고 관리</h2>
      </header>

      <form onSubmit={onSubmit}>
        <label>
          아이템 이름
          <input
            type="text"
            placeholder="아이템 이름"
            name="name"
            value={name}
            required
            onChange={onChange}
          />
        </label>
        <label>
          가격
          <input
            type="number"
            name="price"
            value={price}
            required
            onChange={onChange}
          />
        </label>
        <label>
          수량
          <input
            type="number"
            name="quantity"
            value={quantity}
            required
            onChange={onChange}
          />
        </label>
        <label>
          <input type="submit" value="확인" />
        </label>
      </form>

      <ul>
        {stock.map(({ name, price, quantity }, index) => (
          <li key={index}>
            <dl>
              <dt>이름</dt>
              <dd>{name}</dd>
              <dt>가격</dt>
              <dd>{price.toLocaleString()}</dd>
              <dt>수량</dt>
              <dd>{quantity}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Settings;
