import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;
  animation: fadeInUp 0.8s ease forwards;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-right: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding-right: 0;
    text-align: center;
    align-items: center;
  }
`;

export const Greeting = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.accent1};
  letter-spacing: 0.8px;
  margin-bottom: 8px;
  animation: fadeInUp 0.6s ease 0.1s both;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const HeroName = styled.h1`
  font-size: 6.4rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #FFFFFF 0%, #6C63FF 55%, #00D4FF 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 6s ease infinite, fadeInUp 0.7s ease 0.2s both;
  margin-bottom: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 3.8rem;
    letter-spacing: -0.5px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  color: rgba(240, 244, 255, 0.75);
  margin-bottom: 20px;
  animation: fadeInUp 0.7s ease 0.35s both;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.7rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.7rem;
  line-height: 2.8rem;
  color: ${props => props.theme.colors.muted};
  max-width: 480px;
  margin-bottom: 40px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: 400;
  animation: fadeInUp 0.7s ease 0.5s both;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 2.4rem;
    max-width: 100%;
    margin-bottom: 28px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.7s ease 0.65s both;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
  }
`;
