import React from 'react'
import Group1136 from '../../assets/Group 1136.svg'
import Snapchat from '../../assets/Snapchat.svg'
import Twitter from '../../assets/Twitter.svg'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'

const Footers = () => {
    return (
        <footer className=" rounded-lg shadow dark:bg-gray-900 ">
            <div className="w-full mr-0">
                <div className="sm:items-center sm:justify-between flex flex-col items-center bg-gray-300  pt-10">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center mb-2 sm:mb-0"
                    >
                        <img
                            src={Group1136}
                            className="mr-3 w-48 h-14"
                            alt="Flowbite Logo"
                        />

                    </a>
                    <h3 className='my-4 font-bold' >Social Media</h3>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                <img
                                    src={Snapchat}
                                    className="h-8 mr-3"
                                    alt="Snapchat"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">
                                <img
                                    src={Twitter}
                                    className="h-8 mr-3"
                                    alt="Twitter"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                <img
                                    src={Facebook}
                                    className="h-8 mr-3"
                                    alt="Facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                <img
                                    src={Instagram}
                                    className="h-8 mr-3"
                                    alt="Instagram"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

                <span className="block text-sm text-red-500 text-center py-4 ">
                    Copyright{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        © 2021 Fetch.
                    </a>
                    All rights reserved.
                </span>
            </div>
        </footer>

    )
}

export default Footers