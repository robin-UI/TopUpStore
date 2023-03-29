import Group1136 from '../assets/Group 1136.svg'
import Basket from '../assets/Basket.svg'


const Navbar = () => {
    return (
        <header className='fixed z-50 w-full top-0'>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
                <div className=" flex flex-wrap items-center justify-between mx-auto mb-3">
                    <div className="flex items-center ">
                        <img
                            src={Group1136}
                            className="h-6 mr-3 sm:h-9"
                            alt="Top UP Logo"
                        />
                        <form className='hidden md:block md:w-96 md:ml-7'>
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">

                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-3 pl-4 text-sm text-gray-900 border-none rounded-md bg-[#F1F1F1]  dark:placeholder-gray-400 dark:text-white "
                                    placeholder="Search Products..."
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-[#D44215] dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="text-[#9A9A9A] bg-[#F1F1F1] font-medium rounded-lg text-sm px-5  text-center mr-3 md:mr-3"
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            className="text-white bg-[#F1F1F1]   font-medium rounded-lg text-sm px-5 py-2.5 text-center  flex items-center"
                        >
                            <div>
                                <p className='text-[#9A9A9A] text-xs' >12 products</p>
                                <h4 className='text-black text-base'>QR. 123.00</h4>
                            </div>
                            <img src={Basket} alt="Top Up Basket" className='w-8 ml-2' />
                        </button>
                    </div>

                </div>

                <form className='md:hidden'>
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">

                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-3 pl-4 text-sm text-gray-900 border-none rounded-md bg-[#F1F1F1]  dark:placeholder-gray-400 dark:text-white "
                            placeholder="Search Products..."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-[#D44215] dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </form>

            </nav>

        </header>
    )
}

export default Navbar