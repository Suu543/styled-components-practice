import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';

const MainWrapper = styled.section`
  width: 100% auto;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) => {
    if (page === 'first') return 'flex-end';
    else if (page === 'middle') return 'space-between';
    else return 'flex-start';
  }};
`;

// 항상 _blank 적용 - 별도로 target="_blank" 할 필요 x
const Link = styled.a.attrs((props) => ({
  target: '_blank',
}))`
  color: violet;
  font-size: 1.5rem;
`;

const App = () => {
  return (
    <MainWrapper>
      <Button primary>My Primary Button</Button>
      <Button>My Button</Button>
      <PaginationWrapper page="first">
        <Button>Page 1</Button>
      </PaginationWrapper>
      <PaginationWrapper page="middle">
        <Button>Page 1</Button>
        <Button>Page 2</Button>
      </PaginationWrapper>
      <PaginationWrapper>
        <Button>Page 1</Button>
      </PaginationWrapper>
      <Link href="https://www.google.com">One Link</Link>
      <Link href="https://www.google.com">One Link</Link>
    </MainWrapper>
  );
};

// const App = () => {
//   return (
//     <MainWrapper>
//       <Button primary margin="5rem">
//         My Primary Button
//       </Button>
//       <Button>My Button</Button>
//       <PaginationWrapper>
//         <Button>Page 1</Button>
//       </PaginationWrapper>
//     </MainWrapper>
//   );
// };

export default App;
