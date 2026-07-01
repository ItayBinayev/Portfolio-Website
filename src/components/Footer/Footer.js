import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import {
  FooterWrapper, FooterTop, FooterContent,
  ContactBlock, ContactRow, LinkTitle, LinkItem,
  FooterRight, Slogan, SocialContainer, SocialIcon
} from './FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <FooterTop />
    <FooterContent>
      <ContactBlock>
        <ContactRow>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:054-8055405">054-8055405</LinkItem>
        </ContactRow>
        <ContactRow>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:itaybinayev@gmail.com">itaybinayev@gmail.com</LinkItem>
        </ContactRow>
      </ContactBlock>

      <FooterRight>
        <Slogan>Innovating one project at a time.</Slogan>
        <SocialContainer>
          <SocialIcon href="https://github.com/ItayBinayev" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="2.4rem" />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/itay-binayev/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="2.4rem" />
          </SocialIcon>
        </SocialContainer>
      </FooterRight>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
