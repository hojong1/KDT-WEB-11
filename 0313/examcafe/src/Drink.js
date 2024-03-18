import React, { useState } from "react";

const Drink = (props) => {
  const { drinks } = props;
  const [selectedMenu, setSelectedMenu] = useState([]);

  const handleSelect = (menu) => {
    if (!selectedMenu.includes(menu)) {
      setSelectedMenu([...selectedMenu, menu]);
    }
  };

  return (
    <div>
      <h1>메뉴판</h1>
      <h2>
        {selectedMenu.length > 0 ? (
          <span>{selectedMenu.join(", ")}를 고르셨군요</span>
        ) : (
          "원하는 음료를 골라주세요!"
        )}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table border="1" cellspacing="0" cellpadding="5">
          <thead>
            <tr>
              <th>음료</th>
              <th>음료명</th>
              <th>가격</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            {drinks.map((drink, index) => (
              <tr key={index}>
                <td>
                  <a href={drink.url} target="_blank" rel="noreferrer">
                    <img
                      src={drink.url}
                      alt={drink.menu}
                      width="100px"
                      height="100"
                    />
                  </a>
                </td>
                <td>{drink.menu}</td>
                <td>{drink.price}</td>
                <td>
                  <button onClick={() => handleSelect(drink.menu)}>선택</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Drink;
