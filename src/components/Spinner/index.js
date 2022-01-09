import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  to {transform: rotate(360deg);}
`;

export default styled.div`
  ${({ size }) => {
    const sizing = size === 'small' ? 1 : 2;
    const border = size === 'small' ? 2 : 3;

    return css`
      position: relative;
      width: ${sizing}em;
      height: ${sizing}em;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${sizing}em;
        height: ${sizing}em;
        margin-top: -50%;
        margin-left: -50%;
        border-radius: 50%;
        border: ${border}px solid #3852ca;
        border-top-color: #d8dde6;
        animation: ${rotate} 0.7s linear infinite;
      }
    `;
  }}
`;
