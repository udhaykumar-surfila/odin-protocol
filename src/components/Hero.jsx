// import HeroLogo from "./HeroLogo";
// import { WobbleCard } from "./WobbleCard";
// import { TypeAnimation } from 'react-type-animation';
// import { Vortex } from "./vortex";
// import { TypewriterEffect } from "./TypeWriterEffect";
// import logos from "../assets/logos.png";
// import logo from "../assets/logo.png";
import animationData from "../assets/animation/odin.json"
import animationData2 from "../assets/animation/odin2.json"
import Lottie from "react-lottie";
// import inner from "../assets/inner.svg";
// import outer from "../assets/outer.svg";
// import LogoBlur from '../components/LogoBlur'
import { useRef } from "react";
// import SingleBlur from "./SingleBlur";
// import line1 from "../assets/line1.svg";
// import line2 from "../assets/line2.svg";
// import line3 from "../assets/line3.svg";
// import Line1 from "../components/Line1";
// import Line2 from "../components/Line2";
// import Line3 from "../components/Line3";
// import CircleLight from "../components/CircleLight";




const Hero = () => {
  const lottie1 = useRef();
  const lottie2 = useRef();

  const lottiem1 = useRef();
  const lottiem2 = useRef();

  // const highlight1 = useRef();
  // const highlight2 = useRef();
  // const highlight3 = useRef();

  // const [scale1, setScale1] = useState(0);
  // const [scale2, setScale2] = useState(0);
  // const [scale3, setScale3] = useState(0);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setScale1(prevScale => {
  //       //prevScale === 1.5 ? 0 : 1.5
  //       if (prevScale === 1) {
  //         return 0;
  //       }
  //       const randomLeft1 = (Math.floor(Math.random() * 80) + 1) + "%";
  //       const randomTop1 = (Math.floor(Math.random() * 30) + 1) + "%";
  //       // console.log(randomLeft, randomTop);
  //       if (prevScale === 0) {
  //         highlight1.current.style.left = randomLeft1;
  //         highlight1.current.style.top = randomTop1;
  //       }
  //       return 1;
  //     });
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, [scale1]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setScale2(prevScale => {
  //       //prevScale === 1.5 ? 0 : 1.5
  //       if (prevScale === 1) {
  //         return 0;
  //       }
  //       const randomLeft2 = (Math.floor(Math.random() * 80) + 1) + "%";
  //       const randomTop2 = (Math.floor(Math.random() * 30) + 1) + "%";
  //       // console.log(randomLeft, randomTop);
  //       if (prevScale === 0) {
  //         highlight2.current.style.left = randomLeft2;
  //         highlight2.current.style.top = randomTop2;
  //       }
  //       return 1;
  //     });
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [scale2]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setScale3(prevScale => {
  //       //prevScale === 1.5 ? 0 : 1.5
  //       if (prevScale === 1) {
  //         return 0;
  //       }
        
  //       const randomTop3 = (Math.floor(Math.random() * 80) + 1) + "%";
  //       const randomLeft3 = (Math.floor(Math.random() * 30) + 1) + "%";
  //       console.log(randomLeft3, randomTop3);
  //       if (prevScale === 0) {
  //         highlight3.current.style.left = randomLeft3;
  //         highlight3.current.style.top = randomTop3;
  //       }
  //       return 1;
  //     });
  //   }, 2500);

  //   return () => clearTimeout(timeout);
  // }, [scale3]);

  // useEffect(() => {
  //   setInterval(() => {
  //     const width = highlight1.current.clientWidth;
  //     // add 10px to the width
  //     highlight1.current.style.width = width + 10 + "px";
  //     // get left position
  //     // const left = highlight1.current.style.left;
  //     // get top position
  //     // const top = highlight1.current.style.top;
  //     // console.log(left, top);
  //     // console.log(width);
  //   }, 100);
  // }, []);

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
      callback: () => {
        // console.log("complete", e);
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
 
  

  return (
    <section className="relative py-4 w-screen bg-norse">
    {/* <CircleLight /> */}
      {/* <NorseBg /> */}
      <div>
        {/* <div className="absolute top-0 left-1/4 w-[200px]" style={{ transform: `scale(${scale1})`, transformOrigin: 'center', transition: 'transform 2s' }} ref={highlight1}>
          <SingleBlur />
        </div> */}
        {/* <div className="absolute top-0 left-1/4 w-[200px]" style={{ transform: `scale(${scale2})`, transformOrigin: 'center', transition: 'transform 3s' }} ref={highlight2}>
          <SingleBlur />
        </div>
        <div className="absolute top-0 left-1/4 w-[200px]" style={{ transform: `scale(${scale3})`, transformOrigin: 'center', transition: 'transform 2.5s' }} ref={highlight3}>
          <SingleBlur />
        </div> */}
        {/* <div className="absolute top-0 right-1/4 w-[15%]" ref={highlight1}>
          <SingleBlur />
        </div> */}
      </div>
      {/* <div>
        <div className="hero-primary-arrow hero-primary-arrow--first scale-50 lg:scale-100 absolute z-20 top-0 md:left-20">
          <Line1 />
        </div>
        <div className="hero-primary-arrow hero-primary-arrow--second scale-50 lg:scale-100 absolute z-20 top-[40%] right-0 md:right-10 md:top-2" >
          <Line2 />
        </div>
        <div className="scale-0 lg:scale-100 hero-primary-arrow hero-primary-arrow--third absolute z-20 right-10 top-[40%] hidden md:block">
          <Line3 />
        </div>
      </div> */}
      <div className="flex items-center justify-center w-full h-[70vh] md:h-screen bright">
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
        <div className="flex justify-center max-w-6xl sm:min-h-[30vh] md:min-h-[30vh] mx-auto ">
          <div className="flex flex-col justify-center w-screen max-w-6xl md:min-h-[30vh] mx-auto md:w-2/3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-zinc-100 text-center lheight">
            P2P Protocol For Trading <span className="text-[#9747FF] dark:text-[#9747FF] bg-clip-text dark:bg-clip-text">Runes</span> <br/> On Lightning Network&nbsp;
              
            </h2>
          </div>
          {/* <div className="hidden lg:flex flex-col justify-center align-center max-w-6xl min-h-[60vh] mx-auto w-1/2 "> */}
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
            {/* <div className="absolute bottom-0 right-[-300px] hidden md:block">
              <img src={inner} alt="lightning" className="w-full" />
              <img src={outer} alt="lightning" id="outer" className="w-full absolute top-0" />
            </div> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div className="w-full  text-white"> */}
          {/* <HeroLogo /> */}

          {/* <div className="text-center pt-8">
                            <button className="btn bg-orange-400 rounded-full px-5 py-3 mx-4">Whitepaper</button>
                            <button className="btn bg-orange-400 rounded-full px-5 py-3 mx-4">Open Dapp</button>
                        </div> */}
          {/* </div> */}
        </div>
        
        {/* <div className="absolute hidden md:block md:bottom-[-17%] md:left-[60vw] " >
          <LogoBlur className="absolute" />
        </div> */}
      </div>
      {/* </Vortex> */}
    </section>
  );
}

export default Hero;