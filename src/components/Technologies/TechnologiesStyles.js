import styled from 'styled-components';

export const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  margin: 0 0 4rem;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin-bottom: 2.4rem;
  }
`;

export const BentoCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 2.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  animation: scaleIn 0.5s ease both;
  animation-delay: ${({ index }) => index * 0.1}s;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ color }) => color ? `${color}33` : 'rgba(108,99,255,0.3)'};
    box-shadow: 0 16px 48px ${({ color }) => color ? `${color}22` : 'rgba(108,99,255,0.12)'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem 1.6rem;
    gap: 0.8rem;
  }
`;

export const IconWrapper = styled.div`
  color: ${({ color }) => color || '#6C63FF'};
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  filter: drop-shadow(0 0 12px ${({ color }) => color ? `${color}55` : 'rgba(108,99,255,0.4)'});
  transition: filter 0.3s ease;

  ${BentoCard}:hover & {
    filter: drop-shadow(0 0 20px ${({ color }) => color ? `${color}88` : 'rgba(108,99,255,0.6)'});
  }

  @media ${props => props.theme.breakpoints.sm} {
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const CardLabel = styled.h4`
  font-weight: 700;
  font-size: 1.7rem;
  color: #F0F4FF;
  letter-spacing: 0.3px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const CardDesc = styled.p`
  font-size: 1.35rem;
  line-height: 2rem;
  color: rgba(240, 244, 255, 0.55);
  font-family: Inter, sans-serif;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.25rem;
  }
`;
