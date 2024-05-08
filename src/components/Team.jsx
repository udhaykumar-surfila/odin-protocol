import SingleBlur from "./SingleBlur";
import Footer from "./footer";

const Team = () => {
    return (
        <>
        <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="absolute transform -translate-x-1/2 left-1/2 w-full top-[-25px] lg:top-[-60%] ">
                <SingleBlur />
            </div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Our team</h2>
                    {/* <p className="mt-6 text-lg font-normal text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p> */}
                </div>

                <div className="grid items-start max-w-5xl grid-cols-1 px-8 mx-auto mt-12 gap-y-8 sm:grid-cols-3 sm:mt-16 lg:mt-20 gap-x-8 md:gap-x-12 sm:px-0 lg:gap-x-20">
                    <div>
                        <img className="object-cover w-full rounded-md" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/team/4/team-member-1.png" alt="" />
                        <p className="mt-6 text-lg font-semibold text-white text-center">Aravind</p>
                        <p className="mt-1 text-base font-normal text-gray-400 text-center">Founder</p>
                    </div>

                    <div className="sm:mt-6 lg:mt-10">
                        <img className="object-cover w-full rounded-md" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/team/4/team-member-2.png" alt="" />
                        <p className="mt-6 text-lg font-semibold text-white text-center">Taras</p>
                        <p className="mt-1 text-base font-normal text-gray-400 text-center">CTU</p>
                    </div>

                    <div>
                        <img className="object-cover w-full rounded-md" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/team/4/team-member-3.png" alt="" />
                        <p className="mt-6 text-lg font-semibold text-white text-center">Skai</p>
                        <p className="mt-1 text-base font-normal text-gray-400 text-center">COO</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Team;