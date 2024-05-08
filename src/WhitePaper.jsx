import { BackgroundGradient } from './components/BackgroundGradient'
import Nav from './components/Nav'
import Footer from './components/footer'
const WhitePaper = () => {
    return (
        <>
            <Nav />
            <div className="container mx-auto pt-8">
                {/* our story text center aligned */}
                <div className="text-center">
                    <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">White Paper</h2>
                    <p className="mt-6 text-lg font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Quae cum dixisset, finem ille. </p>
                </div>
            </div>
            <div className="container mx-auto pt-8">
                <BackgroundGradient>
                    <div className="text-center bg-black rounded-[20px]">
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">White Paper</h2>
                        <p className="mt-6 text-lg font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Quae cum dixisset, finem ille. </p>
                    </div>
                </BackgroundGradient>
            </div>
            <Footer />
        </>
    )
}

export default WhitePaper