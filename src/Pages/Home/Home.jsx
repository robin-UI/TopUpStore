import Navbar  from '../../Components/Navbar'
import React from 'react'
import Category from '../../Components/Category/Category'
import Footers from '../../Components/Footer/Footers'
import ProductSection from '../../Components/ProductSection/ProductSection'
import TopCarousel from '../../Components/TopCarousel/TopCarousel'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='px-5 md:bg-gray-300'>
                <TopCarousel />
                <ProductSection />
            </div>
            <Category />
            <Footers />
        </>
    )
}

export default Home