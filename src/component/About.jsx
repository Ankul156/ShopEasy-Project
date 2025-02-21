// import React from "react";


// const About = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen  w-full">
//       <div className="relative w-full h-lvh bg-cover bg-center flex items-center justify-center text-white"
//         style={{ backgroundImage: "url('/about-titlebar-bg.jpg')" }}>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 text-center">
//           <h1 className="text-5xl font-bold">ABOUT US</h1>
//         </div>
//       </div>
//       <section className="py-12 px-6 text-center">
//         <h2 className="text-3xl font-bold">We are Elsey store.</h2>
//         <p className="text-xl font-semibold mt-2">Founded in 2012 – California.</p>
//         <p className="text-gray-600 max-w-2xl mx-auto mt-4">
//           Elsey Store was founded in 2012 by Jack Sparrow and Will Turner. It is the largest independent online fashion and beauty retailer, offering over 1 lakh branded products. Founders worked for selling.com and later created Elsey Online Store Pvt. Ltd. in California, mainly focused on online shopping.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
//           <div className="text-center">
//             <div className="text-4xl">📦</div>
//             <h3 className="font-semibold mt-2">Free Shipping</h3>
//             <p className="text-gray-600">WooCommerce that brings value to your business in Ecommerce.</p>
//             <a href="#" className="text-blue-500 font-semibold">Read more</a>
//           </div>

//           <div className="text-center">
//             <div className="text-4xl">📱</div>
//             <h3 className="font-semibold mt-2">Mobile App</h3>
//             <p className="text-gray-600">Elsey can perfectly adapt to any device based on screen size.</p>
//             <a href="#" className="text-blue-500 font-semibold">Read more</a>
//           </div>

//           <div className="text-center">
//             <div className="text-4xl">🌍</div>
//             <h3 className="font-semibold mt-2">World Wide</h3>
//             <p className="text-gray-600">Well-structured code ensures a smooth experience in search engines.</p>
//             <a href="#" className="text-blue-500 font-semibold">Read more</a>
//           </div>

//           <div className="text-center">
//             <div className="text-4xl">👗</div>
//             <h3 className="font-semibold mt-2">Fashion Design</h3>
//             <p className="text-gray-600">Stunning and eye-catching design makes your theme attractive.</p>
//             <a href="#" className="text-blue-500 font-semibold">Read more</a>
//           </div>
//         </div>
//       </section>
//       <div className="flex flex-col md:flex-row items-center bg-gray-900 text-white">
//         {/* Left Image Section */}
//         <div className="w-full md:w-1/2">
//           <img
//             src="/about_img.webp"
//             alt="Clothing Store"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Content Section */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col items-center text-center md:text-left">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Elsey is a perfect art for your online store
//           </h2>
//           <p className="text-gray-400 mt-4">
//             We are mainly focused on WooCommerce themes with elegance and simplicity that
//             are perfect for any type of creative online business.
//           </p>
//           <button className="mt-6 px-6 py-3 border border-white hover:bg-white hover:text-gray-900 transition">
//             CONTACT US
//           </button>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="mt-12 w-full text-center">
//         <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
//           {[
//             { name: "Alice Johnson", role: "Project Manager", img: "public/teammember1.jpg" },
//             { name: "Bob Smith", role: "Lead Developer", img: "public/teammember2.jpg" },
//             { name: "Sophia Martinez", role: "UI/UX Designer", img: "public/teammember3.jpg" },
//             { name: "David Lee", role: "Marketing Head", img: "public/teammember4.jpg" },
//           ].map((member, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-4">
//               <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
//                 <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mt-4">{member.name}</h3>
//               <p className="text-gray-600 text-sm">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-lvh bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/about-titlebar-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold">ABOUT US</h1>
      </div>

      {/* Introduction Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">We are ShopEasy Store.</h2>
        <p className="text-xl font-semibold mt-2">Founded in 2020 – California.</p>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          ShopEasy Store was founded in 2020 by Ankul Rawat. It is the
          largest independent online fashion and beauty retailer, offering over 1 lakh
          branded products.
        </p>
      </section>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mt-8">
        {[
          { icon: "📦", title: "Free Shipping", desc: "Brings value to your business in Ecommerce." },
          { icon: "📱", title: "Mobile App", desc: "Perfectly adapts to any device based on screen size." },
          { icon: "🌍", title: "World Wide", desc: "Smooth experience in search engines." },
          { icon: "👗", title: "Fashion Design", desc: "Eye-catching design makes your theme attractive." },
        ].map((feature, index) => (
          <div key={index} className="text-center bg-white shadow-md p-6 rounded-lg">
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="font-semibold mt-2">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* About Image and Content Section */}
      <div className="flex flex-col md:flex-row items-center bg-gray-900 text-white mt-12">
        <div className="w-full md:w-1/2">
          <img src="/about_img.webp" alt="Clothing Store" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            ShopEasy is a perfect art for your online store
          </h2>
          <p className="text-gray-400 mt-4">
            We focus on WooCommerce themes with elegance and simplicity, perfect for any online business.
          </p>
          <button className="mt-6 px-6 py-3 border border-white hover:bg-white hover:text-gray-900 transition">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12 mb-10 w-full text-center px-6">
        <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Alice Johnson", role: "Project Manager", img: "/teammember1.jpg" },
            { name: "Bob Smith", role: "Lead Developer", img: "/teammember2.jpg" },
            { name: "Sophia Martinez", role: "UI/UX Designer", img: "/teammember3.jpg" },
            { name: "David Lee", role: "Marketing Head", img: "/teammember4.jpg" },
          ].map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
