import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useRef } from "react";
// import { HeroBackgroundBlur } from './HeroBackgroundBlur'
import { GlobeDemo } from "./GlobeComp";
import animationData from "../assets/animation/bitlight.json";
import Lottie from "react-lottie";
import { ArrowRightAlt, Biotech, Money, Security } from "@mui/icons-material";

const Feature1 = () => {
   const [isShowing, setIsShowing] = useState(false);
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
         setIsShowing(true);
      }
   }, [isIntersecting]);
   // useEffect(() => {
   //     setTimeout(() => {
   //         setIsShowing(true)
   //     }, 2000)
   // }, [])

   return (
      <div>
         <div
            className='h-screen w-full flex items-center justify-around p-10'
            ref={ref}
         >
            {/* transition from opacity-0 to opacity-100 & scale-50 to scale-100 */}
            <div className='w-1/2'>
               <Transition
                  as={Fragment}
                  show={isShowing}
                  enter='transform transition duration-[500ms]'
                  enterFrom='opacity-0  scale-50'
                  enterTo='opacity-100  scale-100'
                  leave='transform duration-200 transition ease-in-out'
                  leaveFrom='opacity-100  scale-100 '
                  leaveTo='opacity-0 scale-95 '
               >
                  <div className='relative'>
                     <div className='absolute inset-0'>
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
                  enter='ease-in-out duration-500'
                  enterFrom='opacity-0  translate-x-full'
                  enterTo='opacity-100  translate-x-0'
                  leave='ease-in-out duration-200'
                  leaveFrom='opacity-100  translate-x-0'
                  leaveTo='opacity-0 translate-x-full'
               >
                  <div>
                     <h2 className='text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl'>
                        Secure and Decentralized Trading
                     </h2>
                     {/* <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Secure your work with cutting-edge protection. </span> Never worry about document safety again.</p> */}
                     <p className='mt-8 text-lg font-normal text-gray-400'>
                        Experience unparalleled security and privacy with
                        peer-to-peer transactions powered by blockchain
                        technology.
                     </p>
                  </div>
               </Transition>
            </div>
         </div>
      </div>
   );
};

const Feature2 = () => {
   const [isShowing, setIsShowing] = useState(false);
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
         setIsShowing(true);
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
         preserveAspectRatio: "xMidYMid slice",
      },
      style: {
         width: "60%",
         height: "100%",
      },
   };

   return (
      <div>
         <div
            className='h-screen w-full flex items-center justify-around p-8'
            ref={ref}
         >
            <div className='w-1/2 p-8 lg:pl-20'>
               <Transition
                  as={Fragment}
                  show={isShowing}
                  enter='ease-in-out duration-500'
                  enterFrom='opacity-0  -translate-x-full'
                  enterTo='opacity-100  translate-x-0'
                  leave='ease-in-out duration-200'
                  leaveFrom='opacity-100  translate-x-0'
                  leaveTo='opacity-0 -translate-x-full'
               >
                  <div>
                     <h2 className='text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl'>
                        Lightning Fast Transactions
                     </h2>
                     {/* <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Secure your work with cutting-edge protection. </span> Never worry about document safety again.</p> */}
                     <p className='mt-8 text-lg font-normal text-gray-400'>
                        Utilize the speed of the Lightning Network to execute
                        trades at the speed of thought.
                     </p>
                  </div>
               </Transition>
            </div>
            {/* transition from opacity-0 to opacity-100 & scale-50 to scale-100 */}
            <div className='w-1/2'>
               <Transition
                  as={Fragment}
                  show={isShowing}
                  enter='transform transition duration-[500ms]'
                  enterFrom='opacity-0  scale-50'
                  enterTo='opacity-100  scale-100'
                  leave='transform duration-200 transition ease-in-out'
                  leaveFrom='opacity-100  scale-100 '
                  leaveTo='opacity-0 scale-95 '
               >
                  <div className='relative'>
                     {/* <div className="absolute inset-0"> */}
                     {/* <HeroBackgroundBlur /> */}
                     {/* </div> */}
                     <Lottie
                        options={defaultOptions}
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
};

const Feature3 = () => {
   const [isShowing, setIsShowing] = useState(false);
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
         setIsShowing(true);
      }
   }, [isIntersecting]);
   // useEffect(() => {
   //     setTimeout(() => {
   //         setIsShowing(true)
   //     }, 2000)
   // }, [])

   return (
      <div>
         <div
            className='h-screen w-full flex items-center justify-around p-8'
            ref={ref}
         >
            <div className='w-1/2'>
               <Transition
                  as={Fragment}
                  show={isShowing}
                  enter='transform transition duration-[500ms]'
                  enterFrom='opacity-0  scale-50'
                  enterTo='opacity-100  scale-100'
                  leave='transform duration-200 transition ease-in-out'
                  leaveFrom='opacity-100  scale-100 '
                  leaveTo='opacity-0 scale-95 '
               >
                  <div className='relative'>
                     <div className='absolute inset-0'>
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
                  enter='ease-in-out duration-500'
                  enterFrom='opacity-0  translate-y-full'
                  enterTo='opacity-100  translate-y-0'
                  leave='ease-in-out duration-200'
                  leaveFrom='opacity-100  translate-y-0'
                  leaveTo='opacity-0 translate-y-full'
               >
                  <div>
                     <h2 className='text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl'>
                        Secure and Decentralized Trading
                     </h2>
                     {/* <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Secure your work with cutting-edge protection. </span> Never worry about document safety again.</p> */}
                     <p className='mt-8 text-lg font-normal text-gray-400'>
                        Experience unparalleled security and privacy with
                        peer-to-peer transactions powered by blockchain
                        technology.
                     </p>
                  </div>
               </Transition>
            </div>
         </div>
      </div>
   );
};

const GridLayout = () => {
   const gridData = [
      {
         id: 1,
         title: "Layers with Bitcoin Finality",
         description:
            "We build the user ecosystem for layers with Bitcoin finality.",
      },
      {
         id: 2,
         title: "Decentralised Perpetual Exchange",
         description:
            "Trade your favorite cryptocurrencies with 20x leverage, ensuring unparalleled security and control with your own keys.",
      },
      {
         id: 3,
         title: "Secure and Decentralized Trading",
         description:
            "Experience unmatched security and privacy with peer-to-peer transactions powered by blockchain technology.",
      },
      {
         id: 4,
         title: "Decentralised Trading Platform",
         description:
            "Experience unmatched security and privacy with peer-to-peer transactions powered by blockchain technology.",
      },
      {
         id: 5,
         title: "Decentralised Trading Platform",
         description:
            "Experience unmatched security and privacy with peer-to-peer transactions powered by blockchain technology.",
      },
      {
         id: 6,
         title: "Decentralised Trading Platform",
         description:
            "Experience unmatched security and privacy with peer-to-peer transactions powered by blockchain technology.",
      },
   ];
   return (
      <section className='pt-20 pb-10'>
         <div className='container max-w-[1048px] mx-auto p-6 rounded-lg bg-gradient-to-br from-[#26262f] to-[#030304]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
               {gridData?.map((item, idx) => {
                  return (
                     <>
                        <div
                           className={
                              "border border-[#8b6df5] p-6 rounded-xl " +
                              (idx === 2 || idx === 5
                                 ? "col-span-1 lg:col-span-2 py-16"
                                 : "col-span-1") +
                              (idx !== 2 || idx !== 5 ? " row-span-2" : "")
                           }
                           key={idx}
                        >
                           {idx === 2 || idx === 5 ? (
                              <>
                                 <div className=' flex flex-col lg:flex-row justify-between gap-3'>
                                    <div
                                       className={
                                          "flex flex-col gap-3 " +
                                          (idx === 2 || idx === 5
                                             ? "w-full lg:w-[45%]"
                                             : "")
                                       }
                                    >
                                       <h3 className={"text-xl  font-normal "}>
                                          {item.title}
                                       </h3>
                                       <p className='text-base font-light '>
                                          {item.description}
                                       </p>
                                    </div>
                                    <div className=''>vijay</div>
                                 </div>
                              </>
                           ) : (
                              <>
                                 <div className='h-48'></div>
                                 <div className={"flex flex-col gap-3 "}>
                                    <h3 className={"text-xl  font-normal "}>
                                       {item.title}
                                    </h3>
                                    <p className='text-base font-light '>
                                       {item.description}
                                    </p>
                                 </div>
                              </>
                           )}
                        </div>
                     </>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

const TextBlock = () => {
   const textBox = [
      {
         id: 1,
         icon: <Biotech />,
         title: "Provenance",
         description:
            "Trade your favorite cryptocurrencies with 20x leverage, ensuring unparalleled security and control with your own keys.",
      },
      {
         id: 2,
         icon: <Security />,
         title: "Security",
         description:
            "Trade your favorite cryptocurrencies with 20x leverage, ensuring unparalleled security and control with your own keys.",
      },
      {
         id: 3,
         icon: <Money />,
         title: "Value",
         description:
            "Trade your favorite cryptocurrencies with 20x leverage, ensuring unparalleled security and control with your own keys.",
      },
   ];
   return (
      <section className='py-10'>
         <div className='container max-w-[1048px] mx-auto px-3 bg-gradient-to-tr from-[#0b0b0e] to-[#171721] rounded-lg'>
            <div className='flex flex-col p-2 py-6 gap-4'>
               <p className='px-4 text-2xl font-light text-white'>
                  DeFi is coming to Bitcoin. The launch of sBTC by Stacks brings
                  over $1 trillion of Bitcoins value into play within financial
                  protocols.Velar stands at the forefront, offering an entry
                  point to utilise directly on the Bitcoin blockchain.
               </p>

               <div className='lg:flex  border border-[#64549e] rounded-md divide-y lg:divide-x divide-[#64549e] bg-gradient-to-tr from-[#1a1923] to-[#171721]'>
                  {textBox?.map((item, idx) => {
                     return (
                        <div
                           className='flex flex-col py-10 px-3 gap-3 lg:w-1/3'
                           key={idx}
                        >
                           <div className='size-10 flex justify-center items-center'>
                              {item.icon}
                           </div>
                           <h4 className='text-xl font-normal text-white'>
                              {item.title}
                           </h4>
                           <p className='text-base font-light text-white'>
                              {item.description}
                           </p>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

const GridThree = () => {
   const gridThreeData = [
      {
         id: 1,
         title: "Provenance",
         description: "Trade your favorite cryptocurrencies with 20x leverage.",
      },
      {
         id: 2,
         title: "Security",
         description: "Trade your favorite cryptocurrencies with 20x leverage.",
      },
      {
         id: 3,
         title: "Value",
         description: "Trade your favorite cryptocurrencies with 20x leverage.",
      },
      {
         id: 4,
         title: "Provenance",
         description: "Trade your favorite cryptocurrencies with 20x leverage.",
      },
      {
         id: 5,
         title: "Security",
         description: "Trade your favorite cryptocurrencies with 20x leverage.",
      },
      {
         id: 6,
         title: "Value",
         description: "Trade your favorite cryptocurrencies with 20x leverage.",
      },
   ];
   return (
      <section className='py-10'>
         <div className='container max-w-[1048px] mx-auto p-6 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               {gridThreeData?.map((item, idx) => {
                  return (
                     <div
                        className='grid-col-1 rounded-lg bg-gradient-to-br from-[#26262f] to-[#030304] min-h-[400px] p-4'
                        key={idx}
                     >
                        <div className='size-60'></div>
                        <div className='flex flex-col gap-3'>
                           <h3 className='text-xl font-normal text-white'>
                              {item.title}
                           </h3>
                           <p className='text-base font-light text-white'>
                              {item.description}
                           </p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

const GridFour = () => {
   const gridFourData = [
      // i want
      {
         id: 1,
         icon: "./logo.svg",
         title: "Provenance",
      },
      {
         id: 2,
         icon: "./logo.svg",
         title: "Security",
      },
      {
         id: 3,
         icon: "./logo.svg",
         title: "Value",
      },
      {
         id: 4,
         icon: "./logo.svg",
         title: "Provenance",
      },
      {
         id: 5,
         icon: "./logo.svg",
         title: "Security",
      },
      {
         id: 6,
         icon: "./logo.svg",
         title: "Value",
      },
      // i want this continuous upto extra 6 data
      {
         id: 7,
         icon: "./logo.svg",
         title: "Provenance",
      },
      {
         id: 8,
         icon: "./logo.svg",
         title: "Security",
      },
      {
         id: 9,
         icon: "./logo.svg",
         title: "Value",
      },
      {
         id: 10,
         icon: "./logo.svg",
         title: "Provenance",
      },
      {
         id: 11,
         icon: "./logo.svg",
         title: "Security",
      },
   ];
   return (
      <section className='py-10'>
         <div className='container max-w-[1048px] mx-auto p-6 bg-gradient-to-tr from-[#0b0b0e] to-[#171721] rounded-lg'>
            <div className='flex flex-col gap-3'>
               <div className='grid grid-cols-2 lg:grid-cols-4 border-2 border-[#64549e] rounded-md bg-gradient-to-tr from-[#1a1923] to-[#171721]'>
                  {gridFourData?.map((item, idx) => {
                     return (
                        <div
                           className={
                              "col-span-1 border border-[#64549e] " +
                              (idx === 5 ? "lg:col-span-2" : "") +
                              (idx === 2 || idx === 8 || idx === 7
                                 ? "col-span-2 lg:col-span-1"
                                 : "")
                           }
                           key={idx}
                        >
                           <div className='h-20 flex justify-center items-center'>
                              {item.title}{" "}
                           </div>
                        </div>
                     );
                  })}
               </div>
               <div className='grid lg:grid-cols-4 gap-5'>
                  <div className='col-span-2 flex gap-2 flex-col lg:flex-row justify-between lg:items-center py-5 px-6 bg-gradient-to-tr from-[#1a1923] to-[#171721] rounded-md'>
                     <div className='flex lg:justify-center items-center'>
                        We’re audited by Strata Labs.
                     </div>

                     <button className='flex justify-end'>
                        View report{" "}
                        <span className=''>
                           <ArrowRightAlt />
                        </span>
                     </button>
                  </div>
                  <div className='col-span-2 flex gap-2 flex-col lg:flex-row justify-between lg:items-center py-5 px-6 bg-gradient-to-tr from-[#1a1923] to-[#171721] rounded-md'>
                     <div className='flex lg:justify-center items-center'>
                        We’re audited by CoinFabrik.
                     </div>

                     <button className='flex justify-end'>
                        View report{" "}
                        <span className=''>
                           <ArrowRightAlt />
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export {
   Feature1,
   Feature2,
   Feature3,
   GridLayout,
   TextBlock,
   GridThree,
   GridFour,
};
