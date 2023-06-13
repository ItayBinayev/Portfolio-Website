import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import ScrollToTopButton from '../components/ScrollToTop/ScrollToTopButton';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (     
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation /> 
      </Section>
      <Projects />
      <Technologies />
      <ScrollToTopButton />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
