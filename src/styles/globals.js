import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes floatUp {
    0%, 100% { transform: translateY(0px) scale(1); }
    50%       { transform: translateY(-24px) scale(1.03); }
  }

  @keyframes floatDown {
    0%, 100% { transform: translateY(0px) scale(1); }
    50%       { transform: translateY(24px) scale(0.97); }
  }

  @keyframes floatDiag {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%       { transform: translate(15px, -20px) scale(1.04); }
    66%       { transform: translate(-10px, 12px) scale(0.96); }
  }

  @keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes shimmer {
    0%   { left: -100%; }
    100% { left: 200%; }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }

  @keyframes dividerGrow {
    from { width: 0; }
    to   { width: 64px; }
  }
`;

export default GlobalStyles;
