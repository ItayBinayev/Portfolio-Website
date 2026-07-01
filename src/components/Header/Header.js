import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiCodeCurly } from 'react-icons/bi';
import { HiMenu, HiX } from 'react-icons/hi';

import {
  Container, Div1, Div2, Div3,
  NavLink, SocialIcons, Span,
  HamburgerButton, MobileMenu, MobileMenuOverlay, MobileNavLink
} from './HeaderStyles';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <Container scrolled={scrolled}>
        <Div1>
          <Link href="/" legacyBehavior passHref>
            <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <BiCodeCurly size="2.6rem" style={{ color: '#6C63FF' }} />
              <Span>&nbsp;I.B</Span>
            </a>
          </Link>
        </Div1>

        <Div2>
          <Link href="#projects" passHref legacyBehavior scroll={false}>
            <NavLink>Projects</NavLink>
          </Link>
          <Link href="#tech" passHref legacyBehavior scroll={false}>
            <NavLink>Technologies</NavLink>
          </Link>
          <Link href="#about" passHref legacyBehavior scroll={false}>
            <NavLink>About</NavLink>
          </Link>
        </Div2>

        <Div3>
          <SocialIcons href="https://github.com/ItayBinayev" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="2.6rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/itay-binayev/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="2.6rem" />
          </SocialIcons>
          <HamburgerButton onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            {mobileOpen ? <HiX size="2.2rem" /> : <HiMenu size="2.2rem" />}
          </HamburgerButton>
        </Div3>
      </Container>

      {mobileOpen && (
        <MobileMenuOverlay onClick={closeMobile}>
          <MobileMenu onClick={e => e.stopPropagation()}>
            <MobileNavLink href="#projects" onClick={closeMobile}>Projects</MobileNavLink>
            <MobileNavLink href="#tech" onClick={closeMobile}>Technologies</MobileNavLink>
            <MobileNavLink href="#about" onClick={closeMobile}>About</MobileNavLink>
          </MobileMenu>
        </MobileMenuOverlay>
      )}
    </>
  );
};

export default Header;
