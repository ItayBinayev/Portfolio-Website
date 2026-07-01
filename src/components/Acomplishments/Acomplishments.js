import React, { useEffect, useRef, useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4, text: 'Projects Built' },
  { number: 1100, text: 'Hours of Practice' },
  { number: 2, text: 'Years of Study' },
  { number: 10, text: 'Technologies Used' },
];

const useCountUp = (target, duration, active) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const intervalMs = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
};

const StatBox = ({ number, text, index }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(number, 1400, inView);

  return (
    <Box ref={ref} index={index}>
      <BoxNum>{count}+</BoxNum>
      <BoxText>{text}</BoxText>
    </Box>
  );
};

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <StatBox key={index} number={card.number} text={card.text} index={index} />
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
