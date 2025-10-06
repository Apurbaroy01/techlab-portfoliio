
import About from '../TechLabsProfile/About';
import Backround from '../TechLabsProfile/Backround';
import Hero from '../TechLabsProfile/Hero';
import Projects from '../TechLabsProfile/Projects';
import Services from '../TechLabsProfile/Services';
import TechStack from '../TechLabsProfile/TechStack';



const Home = () => {
    return (
        <div>
            <Backround>
                <Hero></Hero>
                <About></About>
                <Services></Services>
                <TechStack></TechStack>
                <Projects></Projects>
            </Backround>


        </div>
    );
};

export default Home;