import React, { createContext, useEffect, useState } from "react";

const MainContext = createContext();

function Context(props) {
  const [prod, setProd] = useState([]);
  const [user, SetUser] = useState()

  useEffect(
    () => {
      const user = localStorage.getItem("user");
      if (user != null) {
        SetUser(JSON.parse(user))
      }
    },
    []
  )

  function productid(newProduct) {
    setProd((prevProd) => {
      const existingItemIndex = prevProd.findIndex((item) => item.id === newProduct.id);

      if (existingItemIndex !== -1) {
        return prevProd.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        return [...prevProd, { ...newProduct, quantity: 1 }];
      }
    });
  }
  function userHandler(data) {
    SetUser(data)
    localStorage.setItem("user", JSON.stringify(data))
  }

  function logoutHandler(){
    SetUser(null);
    localStorage.removeItem("user")
  }

  return (
    <MainContext.Provider value={{ prod, setProd, productid, user, userHandler, logoutHandler }}>
      {props.children}
    </MainContext.Provider>
  );
}

export default Context;
export { MainContext };