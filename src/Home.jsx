import "./Home.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import {
   // Feature1,
   // Feature2,
   // GridFour,
   GridLayout,
   // GridThree,
   // TextBlock,
} from "./components/Feature";
import Footer from "./components/footer";
import Waitlist from "./components/Waitlist"; 
// import { BitcoinRiv } from "./components/BitcoinRiv";

function Home() {
   return (
      <>
         <Nav />
         <Hero />
         {/* <BitcoinRiv /> */}
         {/* <Feature1 /> */}
         {/* <Feature2 /> */}
         <GridLayout />
         {/* <TextBlock />
         <GridThree />
         <GridFour /> */}
         <Waitlist />
         <Footer />
      </>
   );
}

export default Home;
