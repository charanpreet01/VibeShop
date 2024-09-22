import React from 'react'
import Title from "../components/Title"
import NewsletterBox from "../components/NewsletterBox"
import { assets } from "../assets/assets"

function About() {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">

          <p>
            Welcome to VibeShop, your go-to destination for all things fashion, electronics, and lifestyle. At VibeShop, we believe in offering our customers not only a diverse range of high-quality products but also a seamless, enjoyable shopping experience. From the latest trends in apparel to cutting-edge gadgets, our collections are carefully curated to cater to your needs and preferences.
          </p>

          <p>
            We are passionate about customer satisfaction, and our dedicated team works round the clock to ensure that every purchase you make meets the highest standards of quality and service. Explore VibeShop today, and discover a new way to shop online!
          </p>

          <b className='text-gray-800'>OUR MISSION</b>
          <p>
            Our mission is to provide an intuitive and user-friendly platform where shopping is simple, fast, and secure. Whether you're browsing for a special occasion or simply upgrading your wardrobe, VibeShop is designed to make your shopping journey effortless, with features like easy navigation, advanced filters, and secure payment options.
          </p>

        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At VibeShop, quality comes first. Every product is thoroughly checked to ensure it meets our high standards, so you can shop with confidence.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>At VibeShop, convenience is our priority. Our easy-to-use platform ensures a smooth and effortless shopping experience from start to finish.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At VibeShop, we offer exceptional customer service, with a dedicated team ready to assist you and ensure a seamless shopping experience.</p>
        </div>

      </div>

      <NewsletterBox />

    </div>
  )
}

export default About