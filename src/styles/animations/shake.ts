import { keyframes } from 'styled-components';

export const shake = keyframes`
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    50% {
        transform: translateX(10px);
    }
    75% {
        transform: translateX(-10px);
    }
    100% {
        transform: translateX(0);
    }
`;

// .face:hover {
//     animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
//     transform: translate3d(0, 0, 0);
//     backface-visibility: hidden;
//     perspective: 1000px;
//   }

//   @keyframes shake {
//     10%, 90% {
//       transform: translate3d(-1px, 0, 0);
//     }

//     20%, 80% {
//       transform: translate3d(2px, 0, 0);
//     }

//     30%, 50%, 70% {
//       transform: translate3d(-4px, 0, 0);
//     }

//     40%, 60% {
//       transform: translate3d(4px, 0, 0);
//     }
//   }