import './AboutUs.css'
import Nav from './components/Nav'
import Team from './components/Team'

const AboutUs = () => {
    return (
        <>
            <Nav />
            <div className="container mx-auto pt-16 md:pt-8">
                {/* our story text center aligned */}
                {/* <div className="text-center">
                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Our Story</h2>
                    <p className="mt-6 text-lg font-normal text-gray-400">Odin protocol aims to deliver a trustminimized non-custodial peer-2-peer trading of these UTXO-based assets leveraging lightning network.</p>
                </div> */}
            </div>
            <Team />
            
        </>
    )
}
export default AboutUs