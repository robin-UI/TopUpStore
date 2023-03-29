import React from 'react'
import './Category.css'
import CategoryCard from '../CategoryCard/CategoryCard'

const Category = () => {
  return (
    <div className='bg-gray-300 md:p-0 p-4 md:bg-white '>

      <div className='firstSection md:bg-gray-300 md:pt-56 md:px-14' >
        <div className="topSection flex justify-between mb-4">
          <h2 className=' font-bold text-2xl' >Shop by Category</h2>
          <p className='text-sm text-red-600' >{`See All Products >`}</p>
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
                <button type="button" className=" text-gray-900 bg-white w-40 font-medium rounded-full text-sm px-9 py-5 mr-2 mb-2 ">Unisex</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="md:flex md:flex-col md:m-auto md:p-auto md:my-6  ">
        <div className="md:flex md:overflow-x-scroll md:px-12 hide-scroll-bar md:mb-4" >

          <div className="md:flex md:flex-nowrap grid grid-cols-2 gap-2" >
            <div className='md:snap-start flex justify-center'>
              <CategoryCard />
            </div>

            <div className='md:snap-start flex justify-center'>
              <CategoryCard />
            </div>

            <div className='md:snap-start flex justify-center'>
              <CategoryCard />
            </div>

            <div className='md:snap-start flex justify-center'>
              <CategoryCard />
            </div>

            <div className='md:snap-start flex justify-center'>
              <CategoryCard />
            </div>

            <div className='md:snap-start flex justify-center'>
              <CategoryCard />
            </div>

            <div className='md:snap-start flex justify-center'>
              <CategoryCard />
            </div>

            <div className='md:snap-start flex justify-center'>
              <CategoryCard />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Category