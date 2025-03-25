import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick, name}) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        <span className="text">{name}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    align-items: center;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    color: #ffffff;
    display: flex;
    font-size: 16px;
    justify-content: center;
    max-width: 100%;
    min-width: 120px;
    padding: 3px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    flex-grow: 1;
  }

  button:active,
  button:hover {
    outline: 0;
  }

  button span {
    background-color: rgb(5, 6, 45);
    padding: 14px 20px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    text-align: center;
  }

  button:hover span {
    background: none;
  }

  button:active {
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    button {
      font-size: 14px;
      min-width: 100%;
    }
  }
`;

export default Button;
