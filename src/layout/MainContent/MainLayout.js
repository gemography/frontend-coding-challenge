import React from 'react';
import Content from '../Content';
import Header from '../Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content> {children}</Content>
    </>
  );
};

export default MainLayout;
