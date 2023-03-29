import ProductCard from "../ProductCards/ProductCard"


const ProductSection = () => {
    return (
        <div className="p-4 md:bg-white md:mt-5 md:absolute md:left-[2.875rem] md:w-max md:top-3/4 md:rounded-sm ">
            <div className="topSection flex justify-between mb-4">
                <h2 className='text-2xl font-bold' >New Arrivals</h2>
                <p className='text-sm text-red-600' >{`See All >`}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 md:grid-cols-5 sm:grid-cols-3 md:justify-evenly">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    )
}

export default ProductSection