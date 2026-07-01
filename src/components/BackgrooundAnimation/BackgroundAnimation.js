import React from 'react';
import styled from 'styled-components';

const OrbWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media ${props => props.theme.breakpoints.sm} {
    min-height: 220px;
    margin-top: 8px;
  }
`;

const OrbBase = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
`;

const OrbPrimary = styled(OrbBase)`
  width: 340px;
  height: 340px;
  background: radial-gradient(circle at center, rgba(108, 99, 255, 0.55) 0%, transparent 70%);
  top: 10%;
  right: 5%;
  animation: floatUp 9s ease-in-out infinite;

  @media ${props => props.theme.breakpoints.sm} {
    width: 180px;
    height: 180px;
  }
`;

const OrbSecondary = styled(OrbBase)`
  width: 260px;
  height: 260px;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.45) 0%, transparent 70%);
  bottom: 15%;
  right: 20%;
  animation: floatDown 7s ease-in-out infinite;
  animation-delay: -2s;

  @media ${props => props.theme.breakpoints.sm} {
    width: 140px;
    height: 140px;
  }
`;

const OrbTertiary = styled(OrbBase)`
  width: 180px;
  height: 180px;
  background: radial-gradient(circle at center, rgba(108, 99, 255, 0.3) 0%, transparent 70%);
  top: 55%;
  right: 2%;
  animation: floatDiag 11s ease-in-out infinite;
  animation-delay: -4s;

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`;

const OrbAccent = styled(OrbBase)`
  width: 120px;
  height: 120px;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.35) 0%, transparent 70%);
  top: 8%;
  right: 40%;
  animation: floatUp 8s ease-in-out infinite;
  animation-delay: -6s;

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`;

const BackgroundAnimation = () => (
  <OrbWrapper>
    <OrbPrimary />
    <OrbSecondary />
    <OrbTertiary />
    <OrbAccent />
  </OrbWrapper>
);

export default BackgroundAnimation;
