import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
  padding: 0 48px;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ scrolled }) => scrolled
    ? 'rgba(7, 9, 26, 0.88)'
    : 'rgba(7, 9, 26, 0.5)'};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid ${({ scrolled }) => scrolled
    ? 'rgba(255,255,255,0.08)'
    : 'transparent'};
  transition: background 0.35s ease, border-color 0.35s ease;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 20px;
    grid-template-columns: auto 1fr auto;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: #F0F4FF;
  letter-spacing: 0.5px;
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.6rem;

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
`;

export const NavLink = styled.a`
  font-size: 1.45rem;
  font-weight: 500;
  color: rgba(240, 244, 255, 0.65);
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  letter-spacing: 0.3px;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #F0F4FF;
    &::after {
      width: 100%;
    }
  }
`;

export const SocialIcons = styled.a`
  color: rgba(240, 244, 255, 0.55);
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease;

  &:hover {
    color: #6C63FF;
    border-color: rgba(108, 99, 255, 0.35);
    background: rgba(108, 99, 255, 0.1);
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: rgba(240, 244, 255, 0.75);
  cursor: pointer;
  padding: 7px;
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    color: #F0F4FF;
  }

  &:focus {
    outline: none;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(7, 9, 26, 0.55);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;
`;

export const MobileMenu = styled.nav`
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, 14, 35, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 8px 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: fadeInUp 0.22s ease;
`;

export const MobileNavLink = styled.a`
  font-size: 1.7rem;
  font-weight: 500;
  color: rgba(240, 244, 255, 0.75);
  padding: 14px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  display: block;

  &:hover {
    background: rgba(108, 99, 255, 0.1);
    color: #F0F4FF;
  }
`;
