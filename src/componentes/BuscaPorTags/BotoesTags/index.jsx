import { useState } from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
  font-size: 24px;
  color: #ffffff;
  background-color: #d9d9d930;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;

  &:hover {
    border-color: #C98CF1;
  }
`;

const BotoesTags = ({ children }) => {
  
  return (
    <BotaoEstilizado>
      {children}
    </BotaoEstilizado>
  );
};

export default BotoesTags;
