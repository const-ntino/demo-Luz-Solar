import React from "react";
import styled from "styled-components";

import "./styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <main>{children}</main>
      </LayoutContainer>
    </>
  );
};

const LayoutContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;

  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default Layout;
