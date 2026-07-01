import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  padding: 2rem 0 3rem;
  column-gap: 2.4rem;
  row-gap: 2.4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1.6rem 0 2rem;
    gap: 2rem;
  }
`;

export const BlogCard = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  animation: fadeInUp 0.6s ease both;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(108, 99, 255, 0.3);
    box-shadow:
      0 20px 60px rgba(108, 99, 255, 0.15),
      0 0 0 1px rgba(108, 99, 255, 0.1);
  }

  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.15s; }
  &:nth-child(3) { animation-delay: 0.25s; }
  &:nth-child(4) { animation-delay: 0.35s; }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(7, 9, 26, 0.6) 100%);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  ${BlogCard}:hover &::after {
    opacity: 1;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 180px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ImgWrapper}:hover & {
    transform: scale(1.06);
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px 24px 0;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #F0F4FF;
  padding: 4px 0 8px;
  font-size: 1.9rem;
  line-height: 1.3;
`;

export const Hr = styled.hr`
  width: 40px;
  height: 2px;
  margin: 0 auto 8px;
  border: 0;
  background: linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%);
  border-radius: 2px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 12px 24px 0;
  color: rgba(240, 244, 255, 0.6);
  font-size: 1.45rem;
  line-height: 2.4rem;
  text-align: left;
  font-family: Inter, sans-serif;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px 20px 0;
    font-size: 1.4rem;
  }
`;

export const UtilityContainer = styled.div`
  margin-top: auto;
  padding: 16px 24px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 16px;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(108, 99, 255, 0.9);
  background: rgba(108, 99, 255, 0.12);
  border: 1px solid rgba(108, 99, 255, 0.2);
  border-radius: 20px;
  padding: 4px 10px;
  letter-spacing: 0.3px;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-shrink: 0;
`;

export const ExternalLinks = styled.a`
  color: rgba(240, 244, 255, 0.85);
  font-size: 1.35rem;
  font-weight: 500;
  padding: 7px 18px;
  background: rgba(108, 99, 255, 0.15);
  border: 1px solid rgba(108, 99, 255, 0.25);
  border-radius: 20px;
  transition: all 0.25s ease;
  letter-spacing: 0.3px;

  &:hover {
    background: rgba(108, 99, 255, 0.3);
    border-color: rgba(108, 99, 255, 0.5);
    color: #fff;
    box-shadow: 0 4px 16px rgba(108, 99, 255, 0.25);
  }
`;
