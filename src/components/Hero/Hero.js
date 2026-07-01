import React from 'react';

import { SecondaryBtn } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ButtonRow, Greeting, HeroDescription, HeroName, HeroSubtitle, LeftSection } from './HeroStyles';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/resume/Itay_Binayev.pdf';
  link.download = 'Itay_Binayev.pdf';
  link.click();
};

const Hero = () => (
  <LeftSection>
    <Greeting>Hi, I&apos;m</Greeting>
    <HeroName>Itay Binayev</HeroName>
    <HeroSubtitle>Full Stack &amp; Software Engineer</HeroSubtitle>
    <HeroDescription>
      Building modern web experiences with clean code and creative solutions —
      from backend APIs to polished user interfaces.
    </HeroDescription>
    <ButtonRow>
      <Button onClick={handleDownload}>Download CV</Button>
      <SecondaryBtn as="a" href="#projects" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>View Projects</SecondaryBtn>
    </ButtonRow>
  </LeftSection>
);

export default Hero;
