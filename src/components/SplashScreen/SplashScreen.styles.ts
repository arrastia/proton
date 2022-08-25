import styled from 'styled-components';

const LoadingLogo = styled('img')`
  height: 150px;
  width: 150px;
`;

const LoadingText = styled('p')`
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  border-right: 2px solid;
  font-size: 1.5rem;
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  width: 20ch;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const SplashScreen = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  background-color: white;
  height: 100vh;
  width: 100vw;
`;

export const Styles = { LoadingLogo, LoadingText, SplashScreen };
