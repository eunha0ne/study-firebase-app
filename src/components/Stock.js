import React, { useState } from "react";
import { dbService } from "../app/firebaseInstance";

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
      price: editedPrice,
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
          <li key={index}>
            <dl>
              <dt>이름</dt>
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
              <dt>가격</dt>
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
              <dt>수량</dt>
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
            </dl>

            {hasAuth && (
              <div>
                <button onClick={() => deleteItem({ id })}>삭제</button>
                {isCurrentEdit ? (
                  <button onClick={() => updateItem({ id })}>확인</button>
                ) : (
                  <button
                    onClick={() => editItem({ id, name, price, quantity })}
                  >
                    수정하기
                  </button>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Stock;
