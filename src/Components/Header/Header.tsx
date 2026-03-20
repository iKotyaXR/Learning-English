import styled from 'styled-components';
import type { FC } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 8px;
`;

const Subtitle = styled.span`
  font-size: 16px;
  margin-bottom: 32px;
  opacity: 0.7;
`;

const Header: FC = () => {
  return (
    <Container>
      <Title>Learning Cards</Title>
      <Subtitle>Learn foreign words with flashcards</Subtitle>
    </Container>
  );
};

export default Header;
