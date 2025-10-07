
import About from '../TechLabsProfile/About';
import Backround from '../TechLabsProfile/Backround';
import HeroSection from '../TechLabsProfile/HeroSection';
import Projects from '../TechLabsProfile/Projects';
import Services from '../TechLabsProfile/Services';
import TechStack from '../TechLabsProfile/TechStack';



const Home = () => {
    return (
        <div>
            <Backround>
                <HeroSection></HeroSection>
                <About></About>
                <Services></Services>
                <TechStack></TechStack>
                <Projects></Projects>
            </Backround>


        </div>
    );
};

export default Home;