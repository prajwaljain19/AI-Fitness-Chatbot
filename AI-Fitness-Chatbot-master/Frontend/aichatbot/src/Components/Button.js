import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <div className="inner">
          <div className="svgs">
            <svg viewBox="0 0 256 256" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg" className="svg-l">
              <path d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0l-23.06-63.44L26.5 143a16 16 0 0 1 0-30l63.44-23.06L113 26.5a16 16 0 0 1 30 0l23.07 63.44L229.5 113a15.79 15.79 0 0 1 10.5 15" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 256 256" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg" className="svg-s">
              <path d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0l-23.06-63.44L26.5 143a16 16 0 0 1 0-30l63.44-23.06L113 26.5a16 16 0 0 1 30 0l23.07 63.44L229.5 113a15.79 15.79 0 0 1 10.5 15" fill="currentColor" />
            </svg>
          </div>
          Generate Diet Plan
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: solid 3px #161616;
    border-top: none;
    border-radius: 12px;
    position: relative;
    box-shadow: 0px 2px 6px #00000062, 0px 6px 20px -8px #000000a6;
    transition: all 0.3s ease;
  }
  .inner {
    padding: 8px 20px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-bottom: solid 2px #374e72;
    border-radius: 10px;
    background: linear-gradient(180deg, #5771a5, #000);
    color: #fff;
    text-shadow: 0 0 5px #fff, 1px 1px #000;
  }
  .svgs {
    position: relative;
    margin-top: 6px;
    z-index: 10;
  }
  .svgs > * {
    filter: drop-shadow(0 0 4px #fff) drop-shadow(1px 1px 0px #000);
  }
  .svgs .svg-s {
    position: absolute;
    font-size: 0.6rem;
    left: 12px;
    top: -3px;
  }
  .button:active {
    box-shadow: none;
  }
`;

export default Button;
