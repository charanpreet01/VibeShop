import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import ScrollToTop from '../components/ScrollToTop';

function Product() {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [showReview, setShowReview] = useState(false);

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100">

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">

        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.5%] ">
            {
              productData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={productData.name}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item)}
                />
              ))
            }
          </div>

          <div className="w-full sm:w-[80%]">
            <img className='w-full h-auto' src={image} alt="" />
          </div>

        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>
            {currency}{productData.price}
          </p>

          <p className='mt-5 text-gray-500 w-4/5'>{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} key={index} className={`border-2 py-2 px-4 bg-gray-100 ${item === size ? "border-gray-500" : ""}`}>
                    {item}
                  </button>
                ))
              }
            </div>
          </div>

          <button
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>
          <hr className='w-4/5 mt-8' />

          <div className="text-sm text-gray-600 flex flex-col gap-1">
            <p>100% Original</p>
            <p>Cash on delivery is available on thhis product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>

        </div>

      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <p onClick={() => setShowReview(false)} className={`border px-5 py-3 text-sm cursor-pointer ${showReview ? "" : "font-semibold"}`}>Description</p>
          <p onClick={() => setShowReview(true)} className={`border px-5 py-3 text-sm cursor-pointer ${showReview ? "font-semibold" : ""}`}>Reviews</p>
        </div>

        <div>
          {
            showReview ? (
              <div className="">
                <div className="border p-6 text-sm text-gray-500">
                  <div className="mb-4">
                    <div className="flex items-center gap-1">
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_dull_icon} alt="" />
                      <p className="ml-2 font-semibold">John Doe</p>
                    </div>
                    <p>Excellent product! The quality is superb and it arrived on time. Highly recommend!</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-1">
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <p className="ml-2 font-semibold">Jane Smith</p>
                    </div>
                    <p>Very satisfied with my purchase. The item matches the description and the customer service was great.</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-1">
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_dull_icon} alt="" />
                      <img className='w-3.5' src={assets.star_dull_icon} alt="" />
                      <p className="ml-2 font-semibold">Michael Johnson</p>
                    </div>
                    <p>Good value for money. The product is exactly as shown in the pictures. Will buy again.</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-1">
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_dull_icon} alt="" />
                      <p className="ml-2 font-semibold">Emily Davis</p>
                    </div>
                    <p>Fast shipping and the product quality is top-notch. Love it!</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-1">
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_icon} alt="" />
                      <img className='w-3.5' src={assets.star_dull_icon} alt="" />
                      <p className="ml-2 font-semibold">David Wilson</p>
                    </div>
                    <p>I'm impressed with the service and the product. Will definitely recommend VibeShop to others.</p>
                  </div>
                </div>

                <div className="mt-8">
                  <textarea
                    placeholder="Write your review here..."
                    rows="4"
                    className="w-full border p-2"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-2 bg-black text-white px-4 py-2"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">

                <p>At VibeShop, we are dedicated to providing you with a diverse and carefully curated selection of products that perfectly blend style, quality, and functionality. Each item in our collection is chosen with meticulous attention to detail, ensuring that it meets our high standards for excellence. We understand that finding the right product is important, which is why we offer comprehensive descriptions and high-resolution images to give you a clear and accurate view of what you're purchasing.

                  Our commitment to exceptional quality means you can trust that every product you choose will deliver on both performance and durability. Whether you're looking for the latest fashion trends, innovative electronics, or everyday essentials, VibeShop makes it easy to find exactly what you need. With our user-friendly platform and dedicated customer support, we aim to make your shopping experience as enjoyable and seamless as possible. Explore our offerings and see how VibeShop can enhance your lifestyle with top-notch products and unparalleled service.</p>

                <p>At VibeShop, we are passionate about offering a diverse and carefully curated selection of products that seamlessly combine style, quality, and practicality. Our collection is designed to cater to a wide range of tastes and needs, with each item meticulously chosen to uphold our high standards of excellence. We believe in providing you with more than just products—we aim to offer an exceptional shopping experience.

                  To help you make informed decisions, we provide detailed descriptions and vibrant, high-resolution images for each product. This ensures that you have all the information you need to choose items that perfectly suit your preferences and requirements. From the latest fashion trends to cutting-edge electronics and essential everyday items, VibeShop has something for everyone.

                  Our commitment to quality extends beyond our products to our customer service. We strive to make your shopping experience as smooth and enjoyable as possible, with a user-friendly platform and responsive support team ready to assist you. Discover how VibeShop can elevate your lifestyle with top-tier products and a shopping experience designed with you in mind.
                </p>

              </div>
            )
          }
        </div>



        {/* Static Reviews with Ratings */}


      </div>

      {/* Display Related Productcs */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : (
    <div className="opacity-0"></div>
  )
}

export default Product