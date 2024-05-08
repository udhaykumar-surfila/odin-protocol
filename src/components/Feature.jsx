import { Transition } from '@headlessui/react'
import { Fragment, useEffect, useState, useRef } from 'react'
// import { HeroBackgroundBlur } from './HeroBackgroundBlur'
import { GlobeDemo } from './GlobeComp' 
import animationData from '../assets/animation/bitlight.json'
import Lottie from 'react-lottie';

const Feature1 = () => {
    const [isShowing, setIsShowing] = useState(false)
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-300px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            setIsShowing(true)

        }
    }, [isIntersecting]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsShowing(true)
    //     }, 2000)
    // }, [])



    return (
        <div>
            <div className="h-screen w-full flex items-center justify-around p-10" ref={ref}>
                {/* transition from opacity-0 to opacity-100 & scale-50 to scale-100 */}
                <div className='w-1/2'>
                    <Transition
                        as={Fragment}
                        show={isShowing}
                        enter="transform transition duration-[500ms]"
                        enterFrom="opacity-0  scale-50"
                        enterTo="opacity-100  scale-100"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100  scale-100 "
                        leaveTo="opacity-0 scale-95 "
                    >
                        <div className="relative">
                            <div className="absolute inset-0">
                                {/* <HeroBackgroundBlur /> */}
                            </div>
                            <GlobeDemo />
                        </div>
                    </Transition>
                </div>
                {/* transition from opacity-0 to opacity-100 & left-96 to left-0 */}
                <div className='w-1/2'>
                    <Transition
                        as={Fragment}
                        show={isShowing}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0  translate-x-full"
                        enterTo="opacity-100  translate-x-0"
                        leave="ease-in-out duration-200"
                        leaveFrom="opacity-100  translate-x-0"
                        leaveTo="opacity-0 translate-x-full"
                    >
                        <div>
                            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Secure and Decentralized Trading</h2>
                            {/* <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Secure your work with cutting-edge protection. </span> Never worry about document safety again.</p> */}
                            <p className="mt-8 text-lg font-normal text-gray-400">Experience unparalleled security and privacy with peer-to-peer transactions powered by blockchain technology.</p>
                        </div>
                    </Transition>
                </div>

            </div>
        </div>
    );
}



const Feature2 = () => {
    
    const [isShowing, setIsShowing] = useState(false)
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-300px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            setIsShowing(true)
        }
    }, [isIntersecting]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsShowing(true)
    //     }, 2000)
    // }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
        style:{
            width: '60%',
            height: '100%'
        }
      };

    return (
        <div>
            <div className="h-screen w-full flex items-center justify-around p-8" ref={ref}>
                <div className='w-1/2 p-8 lg:pl-20'>
                    <Transition
                        as={Fragment}
                        show={isShowing}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0  -translate-x-full"
                        enterTo="opacity-100  translate-x-0"
                        leave="ease-in-out duration-200"
                        leaveFrom="opacity-100  translate-x-0"
                        leaveTo="opacity-0 -translate-x-full"
                    >
                       <div >
                            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Lightning Fast Transactions</h2>
                            {/* <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Secure your work with cutting-edge protection. </span> Never worry about document safety again.</p> */}
                            <p className="mt-8 text-lg font-normal text-gray-400">Utilize the speed of the Lightning Network to execute trades at the speed of thought.</p>
                        </div> 
                    </Transition>
                </div>
                {/* transition from opacity-0 to opacity-100 & scale-50 to scale-100 */}
                <div className='w-1/2'>
                    <Transition
                        as={Fragment}
                        show={isShowing}
                        enter="transform transition duration-[500ms]"
                        enterFrom="opacity-0  scale-50"
                        enterTo="opacity-100  scale-100"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100  scale-100 "
                        leaveTo="opacity-0 scale-95 "
                    >
                    <div className="relative">
                            {/* <div className="absolute inset-0"> */}
                                {/* <HeroBackgroundBlur /> */}
                            {/* </div> */}
                            <Lottie options={defaultOptions}
                                height={400}
                                width={400}
                            ></Lottie>
                            {/* <div className='bg-white h-96 w-96 rounded-md shadow-lg mx-auto'></div> */}
                        </div>
                        
                    </Transition>
                </div>
                {/* transition from opacity-0 to opacity-100 & left-96 to left-0 */}


            </div>
        </div>
    );
}


const Feature3 = () => {
    const [isShowing, setIsShowing] = useState(false)
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-300px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            setIsShowing(true)

        }
    }, [isIntersecting]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsShowing(true)
    //     }, 2000)
    // }, [])

    return (
        <div>
            <div className="h-screen w-full flex items-center justify-around p-8" ref={ref}>
                <div className='w-1/2'>
                    <Transition
                        as={Fragment}
                        show={isShowing}
                        enter="transform transition duration-[500ms]"
                        enterFrom="opacity-0  scale-50"
                        enterTo="opacity-100  scale-100"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100  scale-100 "
                        leaveTo="opacity-0 scale-95 "
                    >
                    <div className="relative">
                            <div className="absolute inset-0">
                                {/* <HeroBackgroundBlur /> */}
                            </div>
                            <div className='bg-white h-96 w-96 rounded-md shadow-lg mx-auto'></div>
                        </div>
                        
                    </Transition>
                </div>
                <div className='w-1/2'>
                    <Transition
                        as={Fragment}
                        show={isShowing}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0  translate-y-full"
                        enterTo="opacity-100  translate-y-0"
                        leave="ease-in-out duration-200"
                        leaveFrom="opacity-100  translate-y-0"
                        leaveTo="opacity-0 translate-y-full"
                    >
                        <div>
                            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Secure and Decentralized Trading</h2>
                            {/* <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Secure your work with cutting-edge protection. </span> Never worry about document safety again.</p> */}
                            <p className="mt-8 text-lg font-normal text-gray-400">Experience unparalleled security and privacy with peer-to-peer transactions powered by blockchain technology.</p>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    );
}


export { Feature1, Feature2, Feature3 };