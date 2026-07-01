import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: visible;
  grid-template-columns: 1fr 1fr;
  scroll-margin-top: 70px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
    grid-template-columns: 1fr;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"};
    width: calc(100vw - 32px);
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '64px' : '52px'};
  line-height: ${(props) => props.main ? '74px' : '60px'};
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.main
    ? 'linear-gradient(135deg, #FFFFFF 0%, #6C63FF 50%, #00D4FF 100%)'
    : 'linear-gradient(135deg, #FFFFFF 20%, rgba(255,255,255,0.65) 100%)'};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  ${(props) => props.main ? 'animation: gradientShift 6s ease infinite;' : ''}
  letter-spacing: -0.5px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '52px' : '44px'};
    line-height: ${(props) => props.main ? '60px' : '52px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.main ? '36px' : '30px'};
    line-height: ${(props) => props.main ? '44px' : '38px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '24px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 1.8rem;
  line-height: 3.2rem;
  font-weight: 400;
  padding-bottom: 3.6rem;
  color: ${props => props.theme.colors.muted};
  font-family: ${props => props.theme.fonts.main};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 1.7rem;
    line-height: 2.8rem;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 2.4rem;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`
  width: 64px;
  height: 4px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%);
  margin: ${(props) => props.divider ? "4rem 0" : ""};
  animation: dividerGrow 0.6s ease forwards;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 3px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 3rem;
  color: rgba(240, 244, 255, 0.75);
  font-family: ${props => props.theme.fonts.main};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 1.5rem;
    line-height: 2.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`

export const SecondaryBtn = styled.button`
  color: rgba(240, 244, 255, 0.85);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  border-radius: 50px;
  padding: 15px 36px;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  letter-spacing: 0.3px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background: rgba(108, 99, 255, 0.15);
    border-color: rgba(108, 99, 255, 0.5);
    box-shadow: 0 0 20px rgba(108, 99, 255, 0.2);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 14px 28px;
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px 20px;
    font-size: 1.4rem;
    width: 100%;
    text-align: center;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : 'fit-content'};
  border-radius: 50px;
  background: linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%);
  padding: 2px;
  display: inline-flex;
  margin: 0;
  cursor: pointer;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: box-shadow 0.3s ease;
  /* hide the duplicate text node passed by Button.js; ButtonFront renders it */
  font-size: 0;
  color: transparent;

  &:hover {
    box-shadow: 0 8px 32px rgba(108, 99, 255, 0.45);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  background: linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%);
  font-size: ${({ alt }) => alt ? '1.6rem' : '1.8rem'};
  font-weight: 600;
  padding: ${({ alt }) => alt ? '13px 28px' : '16px 40px'};
  cursor: pointer;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: opacity 0.3s ease;
  letter-spacing: 0.3px;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
    animation: shimmer 2.5s ease infinite;
  }

  &:focus {
    outline: none;
  }

  &:active {
    opacity: 0.85;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '1.5rem' : '1.6rem'};
    padding: ${({ alt }) => alt ? '12px 24px' : '14px 32px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    padding: 13px 24px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: rgba(108, 99, 255, 0.1);
    transform: scale(1.15);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
