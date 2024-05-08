// import HeroLogo from "./HeroLogo";
// import { WobbleCard } from "./WobbleCard";
// import { TypeAnimation } from 'react-type-animation';
// import { Vortex } from "./vortex";
import { TypewriterEffect } from "./TypeWriterEffect";
// import logos from "../assets/logos.png";
// import logo from "../assets/logo.png";
import animationData from "../assets/animation/odin.json"
import animationData2 from "../assets/animation/odin2.json"
import Lottie from "react-lottie";
import inner from "../assets/inner.svg";
import outer from "../assets/outer.svg";
import LogoBlur from '../components/LogoBlur'
import { useRef } from "react";




const Hero = () => {
  const lottie1 = useRef();
  const lottie2 = useRef();

  const lottiem1 = useRef();
  const lottiem2 = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }

  }
  const EventListner = [
    {
      eventName: 'complete',
      callback: (e) => {
        console.log("complete", e);
        lottie1.current.style.display = "none";
        lottiem1.current.style.display = "none";
        lottie2.current.style.display = "block";
        lottiem2.current.style.display = "block";

      },
    },
  ];
  const loopOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  const words = [
    // {
    //   text: "for",
    //   className: "text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold",
    // },
    // {
    //   text: "trading",
    //   className: "text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold",text-[#714EFF] dark:text-[#714EFF]
    // },
    {
      text: "RUNES",
      className: "text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent dark:text-transparent bg-clip-text dark:bg-clip-text",
    }
  ];

  return (
    <section className="relative py-4 w-screen">
      <div className="flex items-center justify-center w-full h-screen">
        <div className="md:mx-auto px-6 block md:hidden">
          <div ref={lottie1}>
            <Lottie options={defaultOptions}
              height={160}
              width={350}
              isStopped={false}
              isPaused={false}
              eventListeners={EventListner}
            />
          </div>
          <div ref={lottie2} className="hidden">
            <Lottie options={loopOptions}
              height={160}
              width={350}
              isStopped={false}
              isPaused={false}
              
            />
          </div>
        </div>
        <div className="md:mx-auto px-6 hidden md:block">
          <div ref={lottiem1}>
            <Lottie options={defaultOptions}
              height={255}
              width={550}
              isStopped={false}
              isPaused={false}
              eventListeners={EventListner}
            />
          </div>
          <div ref={lottiem2} className="hidden">
            <Lottie options={loopOptions}
              height={255}
              width={550}
              isStopped={false}
              isPaused={false}
              
            />
          </div>
        </div>
      </div>
      {/* <Vortex
        backgroundColor="#242424"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      > */}
      <div className="md:pr-4 mx-auto max-w-7xl px-6">
        <div className="flex justify-center max-w-6xl min-h-[60vh] mx-auto ">
          <div className="flex flex-col justify-center w-screen max-w-6xl min-h-[60vh] mx-auto md:w-1/2 md:mr-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-left text-zinc-700 font-bold dark:text-zinc-100 ">
              P2P trading protocol on lighting network for trading&nbsp;
              <TypewriterEffect
                words={words}
                loop={true}
                cursorClassName="invisible"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-left inline-block bg-gradient-to-r from-[#714EFF] via-[#8b6df5] to-[#a28bf0] text-transparent dark:text-transparent bg-clip-text dark:bg-clip-text"
              />
            </h2>
            {/* <p className="mt-6 relative font-regular text-sm sm:text-xl text-zinc-500 text-left">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p> */}
            <div className="flex pt-10 justify-start">
              <a href="#" className="bg-slate-900 dark:bg-white dark:text-black no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 p-px font-semibold text-white px-4 py-2 w-full sm:w-52 h-14 rounded-2xl text-sm text-center items-center justify-center">Whitepaper</a>
              {/* <a href="#" className="ml-8 w-full sm:w-52 text-sm text-black bg-white dark:bg-black h-14 border border-transparent  dark:text-white dark:border-white flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">Enter App</a> */}
            </div>
            {/* <div className="flex pt-10 justify-start">
              <img src={logos} alt="lightning" className="" />
            </div> */}
          </div>
          <div className="hidden lg:flex flex-col justify-center align-center max-w-6xl min-h-[60vh] mx-auto w-1/2 ">
            {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full"> */}
            {/* <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>

      </WobbleCard>
      <WobbleCard containerClassName="col-span-2 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-4 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
      </WobbleCard> */}
            {/* <img className="" src={logo} alt="lightning" /> */}
            {/* <Lottie options={defaultOptions}
        height={255}
        width={550}
        isStopped={false}
        isPaused={false}
      /> */}
            <div className="absolute bottom-0 right-[-300px] hidden md:block">
              <img src={inner} alt="lightning" className="w-full" />
              <img src={outer} alt="lightning" id="outer" className="w-full absolute top-0" />
            </div>
            {/* </div> */}
          </div>
          {/* <div className="w-full  text-white"> */}
          {/* <HeroLogo /> */}

          {/* <div className="text-center pt-8">
                            <button className="btn bg-orange-400 rounded-full px-5 py-3 mx-4">Whitepaper</button>
                            <button className="btn bg-orange-400 rounded-full px-5 py-3 mx-4">Open Dapp</button>
                        </div> */}
          {/* </div> */}
        </div>
        <div className="absolute hidden md:block md:bottom-0 md:left-[60vw] xl:left-[70vw]" >
          <LogoBlur className="absolute" />
        </div>
      </div>
      {/* </Vortex> */}
    </section>
  );
}

export default Hero;