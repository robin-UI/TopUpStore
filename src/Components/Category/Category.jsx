import React from 'react'
import './Category.css'
import CategoryCard from '../CategoryCard/CategoryCard'

const Category = () => {
  return (
    <div className='bg-gray-300 md:p-0 p-4 md:bg-white '>

      <div className='firstSection md:bg-gray-300 md:pt-4 md:px-6' >
        <div className="topSection flex justify-between mb-4">
          <h2 className='text-xl font-bold' >Shop by Category</h2>
          <p className='text-sm text-red-600' >{`See all products >`}</p>
        </div>

        <div className="flex flex-col m-auto p-auto my-6 ">
          <div className="flex overflow-x-scroll  hide-scroll-bar md:mb-4">
            <div className="flex flex-nowrap" >
              <div className='snap-start'>
                <button type="button" className=" text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Men</button>
              </div>

              <div className='snap-start'>
                <button type="button" className=" text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Women</button>
              </div>

              <div className='snap-start'>
                <button type="button" className=" text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Kids</button>
              </div>

              <div className='snap-start'>
                <button type="button" className=" text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Light</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="catSection grid grid-cols-2 gap-2 md:grid-cols-5 sm:grid-cols-3 md:justify-evenly">

        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />

      </div>
    </div>
  )
}

export default Category