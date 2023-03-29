import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'

const Category = () => {
  return (
    <div className='bg-gray-300 p-4'>  
        <div className="topSection flex justify-between mb-4">
            <h2 className='text-xl font-bold' >Shop by Category</h2>
            <p className='text-sm text-red-600' >{`See all products >`}</p>
        </div>
        <div className='btnSection mb-4'>
          <button type="button" class="text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Men</button>
          <button type="button" class="text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Women</button>
          <button type="button" class="text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Kids</button>
          <button type="button" class="text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Light</button>
        </div>
        <div className="catSection grid grid-cols-2 gap-2">
          
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>

        </div>
    </div>
  )
}

export default Category