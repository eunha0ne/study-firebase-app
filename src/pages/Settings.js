import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { dbService } from "app/firebaseInstance";

import { showModal } from "features/Modal/modalSlice";
import Stock from "components/Stock";

import * as S from "./Settings.style";

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
      await dbService.collection("stock").add({
        name: name,
        price: parseInt(price).toLocaleString(),
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
      data.push({ id: document.id, ...document.data() });
    });

    return data;
  };

  const onStockItemChange = () => {
    dbService.collection("stock").onSnapshot((snapshot) => {
      const updatedData = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data()
      }));

      setStock(updatedData);
    });
  };

  useEffect(() => {
    getStockItems().then((data) => {
      setStock(data);
    });
    onStockItemChange();
  }, []);

  return (
    <S.Container>
      <header>
        <h2>실시간 재고 관리</h2>
      </header>

      <S.Form onSubmit={onSubmit}>
        <fieldset>
          <legend>재고 입력</legend>
          <S.Label>
            <span>아이템 이름</span>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={onChange}
            />
          </S.Label>
          <S.Label>
            <span>가격</span>
            <input
              type="number"
              name="price"
              value={price}
              required
              onChange={onChange}
            />
          </S.Label>
          <S.Label>
            <span>수량</span>
            <input
              type="number"
              name="quantity"
              value={quantity}
              required
              onChange={onChange}
            />
          </S.Label>
          <S.Submit>
            <input type="submit" value="확인" />
          </S.Submit>
        </fieldset>
      </S.Form>
      <Stock user={user} data={stock} />
    </S.Container>
  );
};

export default Settings;
