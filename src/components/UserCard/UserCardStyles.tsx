import styled from "styled-components";

export const UserCardDiv = styled.div`
  align-items: center;
  background-color: #D9D9D9;
  border-radius: 25px;
  display: flex;
  gap: 50px;
  height: 40vh;
  justify-content: center;
  position: relative;
  top: 18vh;
  width: 60vw;
`;

export const NotFoundDiv = styled.div`
  align-items: center;
  background-color: #D9D9D9;
  border-radius: 10px;
  display: flex;
  height: 20vh;
  justify-content: center;
  position: relative;
  top: 18vh;
  width: 60vw;
`;

export const NotFoundMessage = styled.p`
  color: #FF0000;
  font-family: 'Nunito Sans';
  font-size: 20px;
  font-weight: 400;
  height: 5vh;
  letter-spacing: 0%;
  line-height: 100%;
  text-align: center;
  width: 42vw;
`;

export const UserImage = styled.img`
  border: 2px solid #005CFF;
  border-radius: 50%;
  height: 28vh;
  width: 16vw;
`;

export const BioNameDiv = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  height: 15vh;
  justify-content: center;
  width: 35vw;
`;

export const Name = styled.p`
  color: #005CFF;
  font-family: 'Nunito Sans';
  font-size: 20px;
  font-weight: 700;
  height: 3vh;
  letter-spacing: 0%;
  line-height: 100%;
`;

export const Bio = styled.p`
  align-items: center;
  display: flex;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-weight: 300;
  height: 20vh;
  letter-spacing: 0%;
  line-height: 100%;
  width: 33vw;
`;