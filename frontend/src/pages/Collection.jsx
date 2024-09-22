import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from "../components/Title"
import ProductItem from "../components/ProductItem"
import ScrollToTop from '../components/ScrollToTop';

function Collection() {

  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilterAndSort = () => {
    let filteredProducts = products.slice();

    // Apply search filter
    if (showSearch && search) {
      filteredProducts = filteredProducts.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter(item => category.includes(item.category));
    }

    // Apply sub-category filter
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter(item => subCategory.includes(item.subCategory));
    }

    // Apply sorting
    switch (sortType) {
      case "low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // No sorting for 'relevant'
        break;
    }

    // Set the filtered and sorted products
    setFilterProduct(filteredProducts);
  };

  useEffect(() => {
    applyFilterAndSort();

    window.scrollTo({
      top: 0
    });

  }, [category, subCategory, search, showSearch, sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 pt-10 border-t">

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Filter Options */}
      <div className={`sm:min-w-60 sm:sticky top-0 left-0 overflow-auto ${showFilter ? "h-1/2" : ""}`}>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProduct.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Collection