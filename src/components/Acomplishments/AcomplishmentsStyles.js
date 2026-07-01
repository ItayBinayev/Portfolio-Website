import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2rem 0 4rem;
  max-width: 600px;

  @media ${props => props.theme.breakpoints.md} {
    gap: 1.6rem;
    margin: 1.6rem 0 3.2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    max-width: 100%;
    margin: 1.6rem 0 2.4rem;
  }
`;

export const Box = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 2.8rem 2.4rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  animation: scaleIn 0.5s ease both;
  animation-delay: ${({ index }) => index * 0.12}s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(108, 99, 255, 0.25);
    box-shadow: 0 12px 40px rgba(108, 99, 255, 0.12);
    &::before {
      opacity: 1;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 2.2rem 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1.8rem 1.6rem;
  }
`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 1.1;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #FFFFFF 0%, #6C63FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 3.2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 2.8rem;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: 0.02em;
  color: rgba(240, 244, 255, 0.6);
  font-family: Inter, sans-serif;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.4rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    line-height: 1.9rem;
  }
`;
