import styled, { keyframes } from 'styled-components';

const animloader = keyframes`
  0% {
    transform: translate(-10px, -10px);
  }
  25% {
    transform: translate(-10px, 10px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  75% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(-10px, -10px);
  }
`;

const Loader = styled.div`
  animation: ${animloader} 2s linear infinite;
  border: 3px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  height: 48px;
  margin: 20px auto;
  position: relative;
  top: 20vh;
  width: 48px;
`;

const LoaderAfter = styled.div`
  background: #fff;
  bottom: -20px;
  box-sizing: border-box;
  content: '';  
  height: 24px;
  left: 46px;
  position: absolute;
  transform: rotate(-45deg);
  width: 6px;
`;


export { Loader, LoaderAfter };
