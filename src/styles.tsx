import styled from "styled-components";

export const MainTag = styled.main`
  align-items: center;
  background-color: #1F1F1F;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const ElementsSection = styled.section`
  align-items: center;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: start;
  padding-top: 30px;
  position: absolute;
  width: 80vw;
`;

export const Dots = styled.img`
  height: 20vh;
  left: -9vw;
  position: relative;
  top: -35vh;
  width: 10vw;
`;

export const LeftCircle = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 92, 255, 0.7) 0%, rgba(0, 51, 140, 0.5) 70%, rgba(0, 11, 51, 0.050) 100%);
  border-radius: 50%;
  height: 60vh;
  left: -42vw;
  position: relative;
  top: 13vh;
  width: 30vw;
  z-index: 1000;
`;

export const RightCircle = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 92, 255, 0.7) 0%, rgba(0, 51, 140, 0.5) 70%, rgba(0, 11, 51, 0.050) 100%);
  border-radius: 50%;
  height: 60vh;
  left: 20vw;
  position: relative;
  top: -45vh;
  width: 30vw;
`;

export const TitleDiv = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;
  height: 12vh;
  justify-content: center;
  width: 40vw;
`;

export const GithubLogo = styled.img`
  height: 58px;
  left: 528px;
  top: 186px;
  width: 58px;
`;

export const Title = styled.h3`
  color: #FFFFFF;
  font-family: 'Nunito Sans';
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 0%;
  line-height: 100%;
`;

export const GithubTitle = styled.img`
  height: 45px;
  left: 752px;
  top: 195px;
  width: 160px;
`;