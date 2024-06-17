import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer className="py-12 bg-[#030306] sm:pt-16 lg:pt-20 lg:mt-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center space-y-10 lg:justify-between lg:space-y-0 lg:flex-row">
            <div className="shrink-0 w-1/3">
                <a href="/" title="" className="flex text-2xl font-bold">
                    ODIN Protocol
                </a>
            </div>

            <nav className="flex items-center justify-center space-x-6 w-1/3 sm:space-x-16 xl:space-x-20">
                <a href="/aboutus" title="" className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"> About Us </a>

                <a href="./ODIN-Protocol-Whitepaper.pdf" title="" className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"> White Paper </a>

                {/* <a href="#" title="" className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"> App </a> */}

            </nav>

            <ul className="flex items-center justify-end space-x-3 w-1/3">
                <li>
                    <SocialIcon url="https://x.com/theodinprotocol" target="_blank" fgColor="#fff" bgColor="#242424" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600" />
                    {/* <a href="#" title="" className="" target="_blank" rel="noopener">
                        x
                    </a> */}
                </li>

                {/* <li>

                    <SocialIcon url="https://instagram.com/" target="_blank" fgColor="#fff" bgColor="#242424" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600" />

                </li>

                <li>
                    <SocialIcon url="https://linkedin.com/" target="_blank" fgColor="#fff" bgColor="#242424" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600" />

                </li>

                <li>
                    <SocialIcon url="https://medium.com/" target="_blank" fgColor="#fff" bgColor="#242424" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600" />

                </li> */}
            </ul>
        </div>

        <div className="pt-6 text-center border-gray-700">
            <p className="text-sm font-normal text-gray-300">© Copyright 2024, All Rights Reserved by ODIN Protocol</p>
        </div>
    </div>
</footer>

    );
}

export default Footer;