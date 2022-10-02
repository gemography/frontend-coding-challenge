import React from 'react';
import Content from '../Content';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Content> {children}</Content>
    </>
  );
};

export default MainLayout;
