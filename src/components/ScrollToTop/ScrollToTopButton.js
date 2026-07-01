import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiArrowUp } from 'react-icons/hi';

const Btn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(108, 99, 255, 0.45);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: fadeIn 0.3s ease;
  z-index: 90;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 32px rgba(108, 99, 255, 0.6);
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 640px) {
    bottom: 24px;
    right: 20px;
    width: 42px;
    height: 42px;
  }
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <Btn onClick={scrollUp} aria-label="Scroll to top">
      <HiArrowUp size="2rem" />
    </Btn>
  );
};

export default ScrollToTopButton;
