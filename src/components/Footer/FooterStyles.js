import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 0 48px 48px;
  margin: 0 auto;
  box-sizing: content-box;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 40px;
    width: calc(100vw - 32px);
  }
`;

export const FooterTop = styled.div`
  height: 1px;
  background: linear-gradient(135deg, transparent, rgba(108, 99, 255, 0.4), rgba(0, 212, 255, 0.4), transparent);
  margin-bottom: 40px;

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 28px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LinkTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(240, 244, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

export const LinkItem = styled.a`
  font-size: 1.55rem;
  font-weight: 400;
  color: rgba(240, 244, 255, 0.65);
  transition: color 0.25s ease;
  font-family: Inter, sans-serif;
  position: relative;
  left: 0;
  transition: color 0.25s ease, left 0.25s ease;

  &:hover {
    color: #F0F4FF;
    left: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.45rem;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  @media ${props => props.theme.breakpoints.sm} {
    align-items: flex-start;
  }
`;

export const Slogan = styled.p`
  font-size: 1.4rem;
  color: rgba(240, 244, 255, 0.35);
  font-family: Inter, sans-serif;
  letter-spacing: 0.3px;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SocialIcon = styled.a`
  color: rgba(240, 244, 255, 0.5);
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #6C63FF;
    border-color: rgba(108, 99, 255, 0.35);
    background: rgba(108, 99, 255, 0.1);
    transform: scale(1.1);
  }
`;
