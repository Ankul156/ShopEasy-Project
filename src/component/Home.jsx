import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const images = [
  { src: "/categoryimage1.webp", title: "Men's Coat", alt: "Men's Coat", },
  { src: "/categoryimage2.webp", title: "Women's Sweater", alt: "Women's Sweater" },
  { src: "/categoryimage3.webp", title: "Brown Handbag", alt: "Brown Handbag" },
  { src: "/categoryimage4.webp", title: "Man with Glasses", alt: "Man with Glasses" },
  { src: "/categoryimage5.webp", title: "Red Sneakers", alt: "Red Sneakers" },
];

const products = [
  { id: 1, image: "/productimage1.webp", title: "Printable T-Shirts", category: "Mens", price: "₹170.00", },
  { id: 2, image: "/productimage2.webp", title: "Multipurpose Bag", category: "Mens", price: "₹190.00", },
  { id: 3, image: "/productimage3.webp", title: "Men’s Flap Collar", category: "Clothing", price: "₹220.00", },
  { id: 4, image: "/productimage4.webp", title: "Men V-neck T-Shirt", category: "Mens", price: "₹165.00", oldPrice: "₹180.00", sale: true },
  { id: 5, image: "/productimage5.webp", title: "Round Neck T-Shirt", category: "Mens", price: "₹299.00", },
  { id: 6, image: "/productimage6.webp", title: "Casual Shoes", category: "Mens", price: "₹1200.00", oldPrice: "₹1500.00", sale: true },
  { id: 7, image: "/productimage7.webp", title: "Casual T-Shirt", category: "Clothing, Mens", price: "₹290.00", },
  { id: 8, image: "/productimage8.webp", title: "Cotton Travel Bag", category: "Clothing, Womens", price: "₹1100.00", },
];

const NextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl p-2 hover:text-[#BF5834]" onClick={onClick}>
    <MdArrowForwardIos />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl p-2 hover:text-[#BF5834]" onClick={onClick}>
    <MdArrowBackIos />
  </div>
);

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    { id: 1, img: "/homepage1.webp", title: "The Men's Lookbook 2024", desc: "Exclusive collection available now.", position: "items-start" },
    { id: 2, img: "/homepage2.webp", title: "Special Discount Available", desc: "Shop the latest trends at unbeatable prices.", position: "items-start" },
    { id: 3, img: "/homepage3.webp", title: "Shop with Esstional Prices", desc: "Explore the New Collection.", position: "items-end" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Slider */}
      <div className="w-full relative">
        <Slider {...settings} className="w-full">
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-full">
              <motion.img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center ${slide.position} text-white bg-black/50 px-6 sm:px-12 lg:px-20 py-6`}>
                <motion.h2 className="text-xl sm:text-2xl md:text-4xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>{slide.title}</motion.h2>
                <motion.p className="text-sm sm:text-lg max-w-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>{slide.desc}</motion.p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Category Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full group">
            <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg shadow-md" />
            <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white bg-black p-2 text-lg font-semibold">{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Product Section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">SHOP NEW COLLECTION</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group p-6 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                {product.sale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 uppercase">
                    Sale!
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold hover:text-[#777777] cursor-pointer">
                {product.title}
              </h3>
              <p className="text-gray-500 hover:text-[#FFA245] cursor-pointer">
                {product.category}
              </p>
              <p className="text-lg font-bold">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through mr-2">
                    {product.oldPrice}
                  </span>
                )}
                {product.price}
              </p>
              {/* Add to Cart Button with Popup Effect */}
              <div className="absolute bottom-28 left-0 right-0 flex items-center justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button className="bg-black text-white w-[320px]  font-semibold py-2 px-4  shadow-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Home;
