import React from 'react';
import { DiReact, DiNodejsSmall, DiMongodb, DiDotnet } from 'react-icons/di';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BentoGrid, BentoCard, IconWrapper, CardLabel, CardDesc } from './TechnologiesStyles';

const techStack = [
  {
    icon: <DiReact size="4rem" />,
    label: 'Front-End',
    desc: 'React.js & Angular',
    color: '#61DAFB',
  },
  {
    icon: <DiNodejsSmall size="4rem" />,
    label: 'Back-End',
    desc: 'Node.js, Express & ASP.NET',
    color: '#68A063',
  },
  {
    icon: <DiMongodb size="4rem" />,
    label: 'Database',
    desc: 'MongoDB & MSSQL',
    color: '#47A248',
  },
  {
    icon: <DiDotnet size="4rem" />,
    label: '.NET',
    desc: 'ASP.NET Core & C#',
    color: '#512BD4',
  },
];

const Technologies = () => (
  <div>
    <Section id='tech'>
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I&apos;ve worked with a range of technologies across the full stack —
        from front-end interfaces to back-end services and databases.
      </SectionText>
      <BentoGrid>
        {techStack.map((tech, i) => (
          <BentoCard key={i} index={i} color={tech.color}>
            <IconWrapper color={tech.color}>{tech.icon}</IconWrapper>
            <CardLabel>{tech.label}</CardLabel>
            <CardDesc>{tech.desc}</CardDesc>
          </BentoCard>
        ))}
      </BentoGrid>
    </Section>
  </div>
);

export default Technologies;
