import React, { useContext, useEffect } from "react";
import { MainContext } from "./Context";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const { prod, setProd } = useContext(MainContext);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setProd(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setProd([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(prod));
    if (prod.length === 0) {
      localStorage.removeItem("cart");
    }
  }, [prod]);


  if (!prod || prod.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-gray-900 text-xl font-semibold">
          Your cart is empty.
        </p>
      </div>
    );
  }


  function increaseQuantity(index) {
    const updatedProd = prod.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setProd(updatedProd);
  }

  function decreaseQuantity(index) {
    const updatedProd = prod.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setProd(updatedProd);
  }

  function removeItem(index) {
    const updatedProd = prod.filter((_, i) => index !== i);
    setProd(updatedProd);

    if (updatedProd.length === 0) {
      localStorage.removeItem("cart");
    }
  }

  const totalPrice = prod.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaShoppingCart className="text-blue-500 text-3xl" />
          Shopping Cart - Total: ₹{totalPrice.toLocaleString()}
        </h1>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-3/4 mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {prod.map((item, index) => (
                    <tr key={index}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={item.images?.[0] || "https://via.placeholder.com/150"}
                            alt={item.title}
                          />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      </td>
                      <td className="py-4">₹{item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button onClick={() => decreaseQuantity(index)} className="border cursor-pointer rounded-md py-2 px-4 mr-2">-</button>
                          <h3>{item.quantity || 1}</h3>
                          <button onClick={() => increaseQuantity(index)} className="border cursor-pointer rounded-md py-2 px-4 ml-2">+</button>
                        </div>
                      </td>
                      <td className="py-4">₹{(item.price * (item.quantity || 1)).toLocaleString()}</td>
                      <td className="py-4">
                        <button onClick={() => removeItem(index)} className="bg-red-500 cursor-pointer text-white py-1 px-3 rounded-md">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
