import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1; /* Ensure it stays in the background */

  .container {
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
    background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0);
    background-size: 20px 20px;
    background-position: center;
  }
`;

export default Pattern;
