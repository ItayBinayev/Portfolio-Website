import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { BiCodeCurly } from 'react-icons/bi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
  <Div1>
    <Link legacyBehavior href="/">
    <div style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: 18}}>
    <BiCodeCurly size="3rem" />
    <Span>
    &nbsp; I.B
    </Span>
    </div>
    </Link>
  </Div1>
  <Div2>
    
   
      <Link href="#projects" passHref scroll={false}>
      <NavLink>Projects</NavLink>
      </Link>
    
   
      <Link href="#tech" passHref scroll={false}>
      <NavLink>Technologies</NavLink>
      </Link>
    
    
      <Link href="#about" passHref scroll={false}>
      <NavLink>About</NavLink>
      </Link>
   
    
  </Div2>
  <Div3>
    <SocialIcons href='https://github.com/ItayBinayev' target='_blank'>
    <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/itay-binayev/' target='_blank'>
    <AiFillLinkedin size="3rem"/>
    </SocialIcons>
  </Div3>
  </Container>
);

export default Header;
