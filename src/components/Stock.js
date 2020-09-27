import React, { useState } from "react";
import { dbService } from "app/firebaseInstance";

import * as S from "./Stock.style";

const Stock = ({ user, data }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedQuantity, setEditedQuantity] = useState("");

  const deleteItem = async ({ id }) => {
    await dbService.doc(`stock/${id}`).delete();
  };

  const editItem = async ({ id, name, price, quantity }) => {
    setEditedName(name);
    setEditedPrice(price);
    setEditedQuantity(quantity);
    setIsEditable(true);
    setCurrentId(id);
  };

  const updateItem = async ({ id }) => {
    await dbService.doc(`stock/${id}`).update({
      name: editedName,
      price: parseInt(editedPrice).toLocaleString(),
      quantity: editedQuantity
    });
    resetState();
  };

  const onChange = ({ target }) => {
    const { name, value } = target;

    if (name === "name") {
      setEditedName(value);
    } else if (name === "price") {
      setEditedPrice(value);
    } else if (name === "quantity") {
      setEditedQuantity(value);
    }
  };

  const resetState = () => {
    setEditedName("");
    setEditedPrice("");
    setEditedQuantity("");
    setIsEditable(false);
    setCurrentId(null);
  };

  return (
    <ul>
      {data.map(({ name, price, quantity, maintainer, id }, index) => {
        const hasAuth = maintainer === user.uid;
        const isCurrentEdit = currentId === id && isEditable;

        return (
          <S.List key={index}>
            <S.Group>
              <dt>이름:</dt>
              <dd>
                {isCurrentEdit ? (
                  <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={editedName}
                  />
                ) : (
                  name
                )}
              </dd>
              <dt>가격:</dt>
              <dd>
                {isCurrentEdit ? (
                  <input
                    type="text"
                    name="price"
                    onChange={onChange}
                    value={editedPrice}
                  />
                ) : (
                  price.toLocaleString()
                )}
              </dd>
              <dt>수량:</dt>
              <dd>
                {isCurrentEdit ? (
                  <input
                    type="text"
                    name="quantity"
                    onChange={onChange}
                    value={editedQuantity}
                  />
                ) : (
                  quantity
                )}
              </dd>
            </S.Group>

            {hasAuth && (
              <S.ButtonGroup>
                {isCurrentEdit ? (
                  <button onClick={() => updateItem({ id })}>확인</button>
                ) : (
                  <button
                    onClick={() => editItem({ id, name, price, quantity })}
                  >
                    수정하기
                  </button>
                )}
                <button onClick={() => deleteItem({ id })}>삭제</button>
              </S.ButtonGroup>
            )}
          </S.List>
        );
      })}
    </ul>
  );
};

export default Stock;
