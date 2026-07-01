import React from 'react';

import {
  TimelineWrapper, TimelineLine, TimelineEntry,
  TimelineYear, TimelineDot, TimelineCard,
  TimelineCardYear, TimelineText
} from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => (
  <Section id='about'>
    <SectionDivider />
    <br />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      I&apos;m a Full Stack &amp; Software Developer, graduate of Sela College in Full-Stack &amp; Software Development,
      with a passion for building clean, performant web applications.
    </SectionText>
    <TimelineWrapper>
      <TimelineLine />
      {TimeLineData.map((item, index) => (
        <TimelineEntry key={index} index={index}>
          <TimelineYear>{item.year}</TimelineYear>
          <TimelineDot />
          <TimelineCard>
            <TimelineCardYear>{item.year}</TimelineCardYear>
            <TimelineText>{item.text}</TimelineText>
          </TimelineCard>
        </TimelineEntry>
      ))}
    </TimelineWrapper>
  </Section>
);

export default Timeline;
