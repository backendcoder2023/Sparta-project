import React from 'react';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  display: inline-flex;
  align-items: center;
  border: none;

  ${(props) =>
    props.primary &&
    css`
      background: blue;
      color: white;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background: gray;
      color: white;
    `}

  ${(props) =>
    props.success &&
    css`
      background: green;
      color: white;
    `}

  ${(props) =>
    props.warning &&
    css`
      background: orange;
      color: white;
    `}

  ${(props) =>
    props.danger &&
    css`
      background: red;
      color: white;
    `}

  ${(props) =>
    props.link &&
    css`
      background: none; 
      color: white;
      background: grey;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const Button = ({ icon, children, ...props }) => {
  return (
    <StyledButton {...props}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </StyledButton>
  );
};

export default Button;
