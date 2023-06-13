import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/resume/Itay_Binayev.pdf'; // Specify the path to your PDF file in the public folder
  link.download = 'Itay_Binayev.pdf'; // Specify the desired filename for the downloaded file
  link.click();
};

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Welcome To <br/>
      Itay Binayev Portfolio
      </SectionTitle>
      <SectionText>
        Im a full-stack and software engineer !
      </SectionText>
      <Button onClick={handleDownload}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;