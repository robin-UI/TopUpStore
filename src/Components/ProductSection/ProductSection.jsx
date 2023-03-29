import ProductCard from "../ProductCards/ProductCard"


const ProductSection = () => {
    return (
        <div className="p-4">
            <div className="topSection flex justify-between mb-4">
            <h2 className='text-xl font-bold' >Shop by Category</h2>
            <p className='text-sm text-red-600' >{`See all products >`}</p>
        </div>
            {/* <div className="productsection"> */}
            {/* </div> */}

            <div className="grid grid-cols-2 gap-2">
                
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

            </div>

        </div>
    )
}

export default ProductSection