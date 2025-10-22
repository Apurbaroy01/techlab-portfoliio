
import About from '../TechLabsProfile/About';
import Backround from '../TechLabsProfile/Backround';
import Contact from '../TechLabsProfile/Contact';
import Hero from '../TechLabsProfile/Hero';
import Projects from '../TechLabsProfile/Projects';
import ReviewClients from '../TechLabsProfile/ReviewClients';
import Services from '../TechLabsProfile/Services';
import TechStack from '../TechLabsProfile/TechStack';



const Home = () => {
    return (

        <Backround>
            <div className='w-11/12 mx-auto'>
            
                <Hero></Hero>
                <About></About>
                <Services></Services>
                <TechStack></TechStack>
                <ReviewClients></ReviewClients>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </Backround>



    );
};

export default Home;