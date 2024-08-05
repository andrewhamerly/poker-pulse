import { Link } from 'react-router-dom';
import AboutCompany from "../components/About/AboutCompany";
import AboutDevs from "../components/About/AboutDevs";
import AboutCTA from "../components/About/AboutCTA";

const About = () => {
  return (
    <>
    < AboutCompany />
    < AboutDevs />
    < AboutCTA />
    </>
  );
};

export default About;