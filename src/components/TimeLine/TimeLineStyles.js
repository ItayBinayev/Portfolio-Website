import styled from 'styled-components';

export const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 0 4rem;
  padding: 1rem 0;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 80px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(108, 99, 255, 0.5) 10%,
    rgba(0, 212, 255, 0.5) 90%,
    transparent 100%
  );
  border-radius: 2px;

  @media ${props => props.theme.breakpoints.sm} {
    left: 20px;
  }
`;

export const TimelineEntry = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3.2rem;
  position: relative;
  animation: ${({ index }) => index % 2 === 0 ? 'slideInLeft' : 'slideInRight'} 0.6s ease both;
  animation-delay: ${({ index }) => index * 0.15}s;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${props => props.theme.breakpoints.sm} {
    gap: 1.6rem;
  }
`;

export const TimelineYear = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent1};
  min-width: 52px;
  padding-top: 14px;
  text-align: right;
  letter-spacing: 0.5px;
  flex-shrink: 0;

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const TimelineDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%);
  flex-shrink: 0;
  margin-top: 18px;
  box-shadow: 0 0 16px rgba(108, 99, 255, 0.5);
  position: relative;
  z-index: 1;

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 14px;
    width: 12px;
    height: 12px;
  }
`;

export const TimelineCard = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 1.8rem 2.4rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(108, 99, 255, 0.25);
    box-shadow: 0 8px 32px rgba(108, 99, 255, 0.1);
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1.4rem 1.6rem;
  }
`;

export const TimelineCardYear = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent1};
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  display: none;

  @media ${props => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const TimelineText = styled.p`
  font-size: 1.55rem;
  line-height: 2.6rem;
  color: rgba(240, 244, 255, 0.75);
  font-family: Inter, sans-serif;
  font-weight: 400;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 2.3rem;
  }
`;
