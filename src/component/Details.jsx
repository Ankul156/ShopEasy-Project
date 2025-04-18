// // import React, { useContext, useEffect, useState } from "react";
// // import { FaStar, FaHeart, FaCartPlus, FaArrowLeft, FaUserCircle } from "react-icons/fa";
// // import axios from "axios";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { MainContext } from "./Context";

// // export default function Details() {
// //   const [product, setProduct] = useState({});
// //   const { product_id } = useParams();
// //   const { productid } = useContext(MainContext);
// //   const navigate = useNavigate();

// //   const getProduct = () => {
// //     axios
// //       .get(`https://dummyjson.com/products/${product_id}`)
// //       .then((success) => {
// //         setProduct(success.data);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };

// //   useEffect(() => {
// //     getProduct();
// //   }, []);

// //   return (
// //     <section className="py-10 bg-white md:py-16 relative">
// //       <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
// //         <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
// //           {/* Left: Images */}
// //           <div>
// //             <div className="max-w-md lg:max-w-lg mx-auto rounded-xl overflow-hidden shadow-md">
// //               <img className="w-full object-cover" src={product.thumbnail} alt={product.title} />
// //             </div>
// //             <div className="flex flex-wrap gap-3 justify-center mt-6">
// //               {product?.images?.map((image, index) => (
// //                 <img
// //                   key={index}
// //                   className="w-[80px] h-[80px] object-cover rounded-md border hover:border-blue-500 cursor-pointer"
// //                   src={image}
// //                   alt=""
// //                 />
// //               ))}
// //             </div>
// //             <div className="absolute top-4 left-2 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-md shadow">
// //               {product.discountPercentage}% OFF
// //             </div>
// //           </div>

// //           {/* Right: Details */}
// //           <div className="mt-8 lg:mt-0">
// //             <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
// //             <div className="flex flex-col gap-2 text-gray-600">
// //               <p className="text-4xl font-extrabold text-blue-700">₹{product.price}</p>
// //               <div className="flex items-center text-sm gap-2">
// //                 <span className="font-semibold text-gray-700">Rating:</span>
// //                 <div className="flex">
// //                   {Array.from({ length: 5 }, (_, i) => (
// //                     <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>
// //                       ★
// //                     </span>
// //                   ))}
// //                 </div>
// //                 <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
// //               </div>
// //               <p className="text-sm">
// //                 <span className="font-semibold text-gray-700">Stock:</span>
// //                 <span
// //                   className={`ml-1 font-medium ${product.availabilityStatus === 'In Stock'
// //                     ? 'text-emerald-600'
// //                     : 'text-red-500'
// //                     }`}
// //                 >
// //                   {product.availabilityStatus}
// //                 </span>
// //               </p>
// //             </div>

// //             <div className="mt-6 flex gap-4">
// //               <button
// //                 className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 transition"
// //               >
// //                 <FaHeart />
// //                 Add to Favorites
// //               </button>
// //               <button
// //                 onClick={() => productid(product)}
// //                 className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
// //               >
// //                 <FaCartPlus />
// //                 Add to Cart
// //               </button>
// //             </div>

// //             <hr className="my-8 border-gray-200" />

// //             <div className="space-y-3 text-gray-700">
// //               <p>{product.description}</p>
// //               <p><strong>Minimum Order:</strong> {product.minimumOrderQuantity}</p>
// //               <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
// //               <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
// //               <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
// //             </div>

// //             {/* Reviews Section */}
// //             <div className="mt-10">
// //               <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
// //               <div className="space-y-4">
// //                 {product?.reviews?.length > 0 ? product.reviews.map((review, index) => (
// //                   <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
// //                     <div className="flex items-center gap-3 mb-2">
// //                       <FaUserCircle className="text-gray-400 w-6 h-6" />
// //                       <div>
// //                         <p className="font-semibold text-gray-800">{review.reviewerName}</p>
// //                         <p className=" text-gray-800">{review.reviewerEmail}</p>
// //                         <div className="flex text-yellow-400 text-sm">
// //                           {Array.from({ length: 5 }, (_, i) => (
// //                             <span key={i} className={i < Math.round(review.rating) ? "" : "text-gray-300"}>★</span>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <p className="text-sm text-gray-600">{review.comment}</p>
// //                     <p className="text-sm text-gray-600">{review.date}</p>
// //                   </div>
// //                 )) : (
// //                   <p className="text-gray-500">No reviews available yet.</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Back Button */}
// //       <button
// //         onClick={() => navigate('/Listing')}
// //         className="absolute top-8 left-4 p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 shadow"
// //       >
// //         <FaArrowLeft className="w-5 h-5" />
// //       </button>
// //     </section>
// //   );
// // }



// import React, { useContext, useEffect, useState } from "react";
// import { FaStar, FaHeart, FaCartPlus, FaArrowLeft, FaUserCircle } from "react-icons/fa";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import { MainContext } from "./Context";

// export default function Details() {
//   const [product, setProduct] = useState({});
//   const { product_id } = useParams();
//   const { productid } = useContext(MainContext);
//   const navigate = useNavigate();

//   const getProduct = () => {
//     axios
//       .get(`https://dummyjson.com/products/${product_id}`)
//       .then((success) => {
//         setProduct(success.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     getProduct();
//   }, []);

//   const formatDate = (dateStr) => {
//     const date = new Date(dateStr);
//     return date.toLocaleDateString("en-IN", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   return (
//     <section className="py-10 bg-white md:py-16 relative">
//       <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
//           {/* Left: Images */}
//           <div>
//             <div className="relative max-w-md lg:max-w-lg mx-auto rounded-xl overflow-hidden shadow-md">
//               <img className="w-full object-cover" src={product.thumbnail} alt={product.title} />
//               <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
//                 {product.discountPercentage}% OFF
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-3 justify-center mt-6">
//               {product?.images?.map((image, index) => (
//                 <img
//                   key={index}
//                   className="w-[80px] h-[80px] object-cover rounded-md border hover:border-blue-500 cursor-pointer"
//                   src={image}
//                   alt=""
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right: Details */}
//           <div className="mt-8 lg:mt-0">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
//             <div className="flex flex-col gap-2 text-gray-600">
//               <p className="text-4xl font-extrabold text-blue-700">₹{product.price}</p>
//               <div className="flex items-center text-sm gap-2">
//                 <span className="font-semibold text-gray-700">Rating:</span>
//                 <div className="flex">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
//               </div>
//               <p className="text-sm">
//                 <span className="font-semibold text-gray-700">Stock:</span>
//                 <span
//                   className={`ml-1 font-medium ${product.availabilityStatus === 'In Stock'
//                     ? 'text-emerald-600'
//                     : 'text-red-500'
//                     }`}
//                 >
//                   {product.availabilityStatus}
//                 </span>
//               </p>
//             </div>

//             <div className="mt-6 flex gap-4">
//               <button
//                 className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 transition"
//               >
//                 <FaHeart />
//                 Add to Favorites
//               </button>
//               <button
//                 onClick={() => productid(product)}
//                 className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
//               >
//                 <FaCartPlus />
//                 Add to Cart
//               </button>
//             </div>

//             <hr className="my-8 border-gray-200" />

//             <div className="space-y-3 text-gray-700">
//               <p>{product.description}</p>
//               <p><strong>Minimum Order:</strong> {product.minimumOrderQuantity}</p>
//               <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
//               <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
//               <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
//             </div>

//             {/* Reviews Section */}
//             <div className="mt-10">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
//               <div className="space-y-4">
//                 {product?.reviews?.length > 0 ? product.reviews.map((review, index) => (
//                   <div key={index} className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
//                     <div className="flex items-start gap-4 mb-3">
//                       <FaUserCircle className="text-gray-400 w-8 h-8 mt-1" />
//                       <div>
//                         <p className="font-semibold text-gray-800">{review.reviewerName}</p>
//                         <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
//                         <div className="flex text-yellow-400 text-sm mt-1">
//                           {Array.from({ length: 5 }, (_, i) => (
//                             <span key={i} className={i < Math.round(review.rating) ? "" : "text-gray-300"}>★</span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-700 text-sm mb-1">{review.comment}</p>
//                     <p className="text-xs text-gray-500">Reviewed on: {formatDate(review.date)}</p>
//                   </div>
//                 )) : (
//                   <p className="text-gray-500">No reviews available yet.</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Back Button */}
//       <button
//         onClick={() => navigate('/Listing')}
//         className="absolute top-8 left-4 p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 shadow"
//       >
//         <FaArrowLeft className="w-5 h-5" />
//       </button>
//     </section>
//   );
// }


import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaHeart, FaCartPlus, FaArrowLeft, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { MainContext } from "./Context";

export default function Details() {
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const { product_id } = useParams();
  const { productid } = useContext(MainContext);
  const navigate = useNavigate();

  const getProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${product_id}`)
      .then((success) => {
        setProduct(success.data);
        setSelectedImage(success.data.thumbnail); // default image
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-10 bg-white md:py-16 relative">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left: Images */}
          <div>
            <div className="relative max-w-md lg:max-w-lg mx-auto rounded-xl overflow-hidden shadow-md">
              <img className="w-full object-cover" src={selectedImage} alt={product.title} />
              <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                {product.discountPercentage}% OFF
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {product?.images?.map((image, index) => (
                <img
                  key={index}
                  className={`w-[80px] h-[80px] object-cover rounded-md border cursor-pointer ${
                    selectedImage === image ? "border-blue-500" : "hover:border-blue-300"
                  }`}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="mt-8 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <div className="flex flex-col gap-2 text-gray-600">
              <p className="text-4xl font-extrabold text-blue-700">₹{product.price}</p>
              <div className="flex items-center text-sm gap-2">
                <span className="font-semibold text-gray-700">Rating:</span>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
              </div>
              <p className="text-sm">
                <span className="font-semibold text-gray-700">Stock:</span>
                <span
                  className={`ml-1 font-medium ${product.availabilityStatus === 'In Stock'
                    ? 'text-emerald-600'
                    : 'text-red-500'
                    }`}
                >
                  {product.availabilityStatus}
                </span>
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                className="flex items-center cursor-pointer gap-2 px-5 py-2.5 text-sm font-medium text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 transition"
              >
                <FaHeart />
                Add to Favorites
              </button>
              <button
                onClick={() => productid(product)}
                className="flex items-center gap-2 px-5 py-2.5 cursor-pointer text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
              >
                <FaCartPlus />
                Add to Cart
              </button>
            </div>

            <hr className="my-8 border-gray-200" />

            <div className="space-y-3 text-gray-700">
              <p>{product.description}</p>
              <p><strong>Minimum Order:</strong> {product.minimumOrderQuantity}</p>
              <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
              <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
              <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
            </div>

            {/* Reviews Section */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                {product?.reviews?.length > 0 ? product.reviews.map((review, index) => (
                  <div key={index} className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4 mb-3">
                      <FaUserCircle className="text-gray-400 w-8 h-8 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">{review.reviewerName}</p>
                        <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
                        <div className="flex text-yellow-400 text-sm mt-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < Math.round(review.rating) ? "" : "text-gray-300"}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-1">{review.comment}</p>
                    <p className="text-xs text-gray-500">Reviewed on: {formatDate(review.date)}</p>
                  </div>
                )) : (
                  <p className="text-gray-500">No reviews available yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/Listing')}
        className="absolute top-8 left-4 p-3 cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 shadow"
      >
        <FaArrowLeft className="w-5 h-5" />
      </button>
    </section>
  );
}
