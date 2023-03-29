import './ProductCard.css'

const ProductCard = () => {
    return (
        <div className='flex justify-center my-2 md:mr-[3rem]'>
            <div className="  dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="card-image" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                </a>
                <div className="">
                    <p className=" text-gray-700 dark:text-gray-400">
                        ID334490
                    </p>
                    <a href="#">
                        <h5 className=" text-base tracking-tight text-gray-900 dark:text-white">
                            Nike Sports Shoes...
                        </h5>
                    </a>
                    <h2 className=" text-red-600 text-sm" ><span className="text-gray-400" >QR 54.67</span> QR 48.00  <span className="text-green-500">{`(-100%)`}</span></h2>
                </div>
            </div>

        </div>
    )
}

export default ProductCard