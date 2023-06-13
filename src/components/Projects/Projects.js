import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, UtilityContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider/>
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
       <BlogCard key={project.id}>
        <Img src={project.image}/>
        <TitleContent>
          <HeaderThree title={project.title}>{project.title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>{project.description}</CardInfo>
        <UtilityContainer>
          <TagList>
            {project.tags.map((tag,i) => (
              <Tag key={i} >{tag}</Tag>
              )
              )}
          </TagList>
        
        <UtilityList>
          <ExternalLinks href={project.source} target='_blank'>Code
            </ExternalLinks>
        </UtilityList>
        </UtilityContainer>
       </BlogCard>
      ))}
    </GridContainer>
    <br />
  </Section>
);

export default Projects;