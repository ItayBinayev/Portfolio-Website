import React from 'react';

import {
  BlogCard, CardInfo, ExternalLinks, GridContainer,
  HeaderThree, Hr, ImgWrapper, Img, Tag, TagList,
  TitleContent, UtilityList, UtilityContainer
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <ImgWrapper>
            <Img src={project.image} alt={project.title} />
          </ImgWrapper>
          <TitleContent>
            <HeaderThree>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <UtilityContainer>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={project.source} target="_blank" rel="noopener noreferrer">
                Code
              </ExternalLinks>
              {project.visit && (
                <ExternalLinks href={project.visit} target="_blank" rel="noopener noreferrer">
                  Live
                </ExternalLinks>
              )}
            </UtilityList>
          </UtilityContainer>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
