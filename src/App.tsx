import WebBuilder from "WebBuilder";
import React from "react";
import { styled } from "styled-components";

const AppFrame = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`;
const App = () => {
  return (
    <AppFrame>
      <WebBuilder />
    </AppFrame>
  );
};

export default App;
