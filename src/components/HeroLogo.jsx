// import { Transition } from '@headlessui/react'
import Lottie from 'react-lottie';
import animationData from '../assets/animation/logo.json'

const HeroLogo = () => {
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <>
             {/* <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[500ms]"
          enterFrom="opacity-0  scale-50"
          enterTo="opacity-100  scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100  scale-100 "
          leaveTo="opacity-0 scale-95 "
        > */}
          <div className="h-full w-full rounded-md bg-white shadow-lg flex align-middle justify-center text-black" >
          <Lottie options={defaultOptions} 
        height={400}
        width={400}
      />
          </div>
        {/* </Transition> */}
        </>
    )
}

export default HeroLogo;