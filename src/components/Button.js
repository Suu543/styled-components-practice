import React from 'react';
import styled, { css } from 'styled-components';

import { Wrapper, FadeIn } from './styled';

// const StyledButton = styled.button`
//   padding: 1rem 1.5rem;
//   font-size: 1.8rem;
//   outline: none;
//   border: none;
//   margin-bottom: 1rem;
//   background-color: #333;
//   /* color: ${({ primary }) => (primary ? 'red' : '#fff')}; */
//   /* color: ${(props) => (props.primary ? 'red' : '#fff')}; */
//   ${({ primary }) =>
//     primary &&
//     css`
//       color: red;
//       background-color: ${({ bgColor }) => bgColor};
//     `}
// `;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.p};
  margin: ${({ margin }) => margin || '2rem'};
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${FadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    color: white;
    background-color: palevioletred;
  }

  .someClass {
    color: blue;
  }

  @media ${({ theme }) => theme.mediaQueries['below-768']} {
    font-size: 0.4rem;
    color: blue;
  }
`;

// 여기에 하거나, OutterWrapper Component에 바로 할 수 있다.
// ${OutterWrapper}:hover & {
//   color: red;
// }

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: ${({ theme }) => theme.spacers.large};

  &:hover ${StyledButton} {
    color: red;
  }
`;

// This is a super bad practice, performance problem
const SuperButton = styled(StyledButton)`
  // Inherit StyledButton Style and Overwrap it
  font-size: 2.5rem;
`;

const Button = ({ primary, margin, children }) => {
  // Don't do this. It is super bad for performance
  // const StyledTitle = styled.h2`
  //   color: blue;
  // `;

  return (
    <OutterWrapper>
      <StyledButton margin={margin} primary={primary}>
        {children}
        <p className="someClass">Test</p>
      </StyledButton>
      <SuperButton>{children}</SuperButton>
    </OutterWrapper>
  );
};

export default Button;
