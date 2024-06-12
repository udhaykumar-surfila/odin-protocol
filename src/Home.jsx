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

function Home() {
   return (
      <>
         <Nav />
         <Hero />
         {/* <Feature1 /> */}
         {/* <Feature2 /> */}
         <GridLayout />
         {/* <TextBlock />
         <GridThree />
         <GridFour /> */}
         <Footer />
      </>
   );
}

export default Home;
