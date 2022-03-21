import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const BigCircle = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 100% !important;
    box-shadow: inset -4px -4px 8px 0px white, inset 4px 4px 8px 0px #ddd8d4;
`;

export const InnerCircle = styled.div`
    z-index: 2;
    position: absolute;
    top: calc(50% - 35%);
    left: calc(50% - 35%);
    width: 70%;
    height: 70%;
    border-radius: 100% !important;
    background: #E4EBF5;
    box-shadow: -4px -4px 8px 0px white, 4px 4px 8px 0px #cecece,
    inset 0px 0px 0px 0px white, inset 0px 0px 0px 0px #cecece;
`;

export const Loader = styled.div`
    z-index: 1;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 105%;
    height: 105%;

 svg {
    width: 100%;
    height: 100%;
    height: 100%;
    width: 100%;
    animation: rotate 4s linear infinite;
    transform-origin: center center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: -2.5%;
 }

 circle {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 3s ease-in-out infinite;
 }

@keyframes rotate {
    100% { 
        transform: rotate(360deg);}
    }

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
 
`;