/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import inner from "../assets/inner.svg";
import outer from "../assets/outer.svg";
import SingleBlur from './SingleBlur';
import logo from "../assets/logo.svg";

function Nav() {
    const [expanded, setExpanded] = useState(false);
    return (
        <section className="relative py-4 sm:py-6" >
        <div className="absolute top-[-300%] transform -translate-x-1/2 left-1/2 w-full block md:hidden">
            <SingleBlur />
        </div>
        <div className="absolute top-[-400%] right-0 block md:hidden">
              <img src={inner} alt="lightning" className="w-full" />
              <img src={outer} alt="lightning" id="outer" className="w-full absolute top-0" />
            </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
            <nav className="flex items-center justify-between">
                <div className="shrink-0">
                    <a href="/" title="" className="flex items-center">
                    <img src={logo} alt="logo" className="w-20 md:w-36" />
                    </a>
                </div>

                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="p-1 text-gray-200 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-gray-900 focus:ring-offset-2"
                    >
                        {expanded ? <CloseIcon onClick={() => setExpanded(false)} /> : <MenuIcon onClick={() => setExpanded(true)} />}
                    </button>
                </div>

                <div className="hidden md:flex md:items-center md:justify-end md:space-x-12">
                    <a href="/aboutus" title="" className="text-base font-medium text-gray-300 transition-all duration-200 hover:white"> About Us</a>

                    <a href="/whitepaper" title="" className="text-base font-medium text-gray-300 transition-all duration-200 hover:white"> Whitepapper </a>

                </div>

                <div className="hidden w-[105px] md:flex">
                    {/* <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-800 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700"
                        role="button"
                    >
                        Open Dapp
                    </a> */}
                    <span ></span>
                </div>
            </nav>

        {expanded && (
            <nav x-show="expanded" x-collapse>
                <div className="px-1 py-5">
                    <div className="grid gap-y-6">
                        <a href="/aboutus" title="" className="text-base font-medium text-gray-300 transition-all duration-200 hover:text-white"> About Us</a>

                        <a href="/whitepaper" title="" className="text-base font-medium text-gray-300 transition-all duration-200 hover:text-white"> Whitepapper </a>


                        {/* <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-800 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700"
                            role="button"
                        >
                            Open Dapp
                        </a> */}
                    </div>
                </div>
            </nav>
        )}
        </div>
    </section>

    )
}


export default Nav