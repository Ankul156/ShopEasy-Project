import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "./Context";

export default function Listing() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const { category_slug } = useParams();
  const limits = 30;
  const { productid } = useContext(MainContext);

  const fetchProducts = async () => {
    setLoading(true);
    let API = category_slug
      ? `https://dummyjson.com/products/category/${category_slug}`
      : "https://dummyjson.com/products";

    try {
      const res = await axios.get(API);
      setProducts(res.data.products);
      setPage(Math.ceil(res.data.total / limits));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [category_slug, currentPage]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pagination = Array.from({ length: page }, (_, index) => (
    <li
      key={index}
      onClick={() => handlePagination(index)}
      className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 rounded-md cursor-pointer"
    >
      {index + 1}
    </li>
  ));

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Categories Section */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Shop by Categories</h2>
            <ul className="space-y-2">
              <Link to="/listing">
                <li className="p-3 text-gray-700 hover:bg-blue-50 rounded-lg cursor-pointer">All</li>
              </Link>
              {categories.map((cat) => (
                <Link to={`/listing/${cat.slug}`} key={cat.slug}>
                  <li
                    className={`p-3 text-gray-700 hover:bg-blue-50 rounded-lg cursor-pointer ${category_slug === cat.slug ? "bg-blue-100" : ""
                      }`}
                  >
                    {cat.name}
                  </li>
                </Link>
              ))}
            </ul>

            {/* Mobile Dropdown */}
            <div className="lg:hidden mt-4">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Categories
              </button>
              {dropdownOpen && (
                <ul className="mt-2 space-y-2 bg-white shadow-lg rounded-md py-2">
                  <Link to="/listing">
                    <li className="px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg cursor-pointer">
                      All
                    </li>
                  </Link>
                  {categories.map((cat) => (
                    <Link to={`/listing/${cat.slug}`} key={cat.slug}>
                      <li
                        className={`${category_slug === cat.slug ? "bg-blue-100" : ""
                          } px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg cursor-pointer`}
                      >
                        {cat.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
            {loading
              ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="group relative animate-pulse bg-white rounded-lg shadow-md p-4">
                  <div className="aspect-square w-full rounded-md bg-gray-200 lg:aspect-auto lg:h-80"></div>
                  <div className="mt-4 flex justify-between">
                    <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                  </div>
                </div>
              ))
              : products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-96"
                >
                  <Link to={`/details/${product.id}`}>
                    <img
                      alt={product.imageAlt}
                      src={product.thumbnail}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </Link>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      <Link to={`/details/${product.id}`}>{product.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">₹{product.price}</p>
                    <div className="mt-auto">
                      <button
                        onClick={() => productid(product)}
                        type="button"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 cursor-pointer"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

              ))}
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8 mb-8">
        <nav aria-label="Page navigation">
          <ul className="flex space-x-2 items-center">
            {pagination}
          </ul>
        </nav>
      </div>
    </div>
  );
}