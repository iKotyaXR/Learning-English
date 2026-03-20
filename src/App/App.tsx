import './App.css';
import styled from 'styled-components';
import Header from '../Components/Header/Header.tsx';
import { Tabs } from '../Components/Tabs/Tabs.tsx';
import type { ITab } from '../Components/Tabs/types.ts';
import { BookCheckIcon, BookOpenIcon } from 'lucide-react';

import Controls from '../Components/Controls/Controls.tsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #266efe;
  padding: 24px 16px;
  height: 100%;
`;

const Content = styled.main`
  max-width: 600px;
`;

const tabs: ITab[] = [
  {
    title: 'Learning',
    value: 'learning',
    icon: BookOpenIcon
  },
  {
    title: 'Dictionary',
    value: 'dictionary',
    icon: BookCheckIcon
  }
];

function App() {
  return (
    <Container>
      <Content>
        <Header />
        <Tabs
          tabs={tabs}
          onTabChange={(tab) => {
            console.log(tab.title);
          }}
        />
      </Content>

      <Controls />
    </Container>
  );
}

export default App;
