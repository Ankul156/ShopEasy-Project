import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaHeart, FaCartPlus, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { MainContext } from "./Context";

export default function Details() {
  const [product, setProduct] = useState({});
  const { product_id } = useParams();
  const { productid } = useContext(MainContext);
  const navigate = useNavigate();

  const getProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${product_id}`)
      .then((success) => {
        setProduct(success.data);
        console.log(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section className="py-8 bg-white md:py-16 antialiased relative">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div>
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img className="w-full" src={product.thumbnail} alt="" />
            </div>
            <div className="flex max-w-sm mt-10 lg:max-w-lg mx-auto">
              {product?.images?.map((image, index) => {
                return <img key={index} className="w-[100px]" src={image} alt="" />;
              })}
            </div>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              {product.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                ₹{product.price}
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  <FaStar className="w-4 h-4 text-yellow-300" />
                  <FaStar className="w-4 h-4 text-yellow-300" />
                  <FaStar className="w-4 h-4 text-yellow-300" />
                  <FaStar className="w-4 h-4 text-yellow-300" />
                  <FaStar className="w-4 h-4 text-yellow-300" />
                </div>
                <p className="text-sm font-medium leading-none text-gray-500">
                  (5.0)
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                >
                  345 Reviews
                </a>
              </div>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button
                href="#"
                title=""
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                role="button"
              >
                <FaHeart className="w-5 h-5 -ms-2 me-2" />
                Add to favorites
              </button>
              <button
                onClick={() => productid(product)}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  my-5 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Add to cart
              </button>
            </div>
            <hr className="my-6 md:my-8 border-gray-200" />
            <p className="mb-6 text-gray-500">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Back Button Section */}
      <button
        onClick={() => navigate('/Listing')}
        className="absolute top-8 left-4 p-3 cursor-pointer bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 z-10"
      >
        <FaArrowLeft className="w-5 h-5" />
      </button>
    </section>
  );
}
