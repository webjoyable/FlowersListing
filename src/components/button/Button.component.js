import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: ${(props) => (props.margin ? props.margin : "3rem")};
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  justify-content: ${(props) => {
    switch (props.align) {
      case "right":
        return "flex-end";
      case "center":
        return "center";
      default:
        return "flex-start";
    }
  }};
`;

const ButtonLayout = styled.div`
  background: ${(props) =>
    props.color ? props.color : props.theme.colors.main};
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 3px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.hover};
    transition: all 0.3s ease;
  }
`;

const Button = ({ children, onClick, align, margin, color, ...otherProps }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <ButtonWrapper align={align} margin={margin}>
      <ButtonLayout color={color} onClick={handleClick}>
        {children}
      </ButtonLayout>
    </ButtonWrapper>
  );
};

export default Button;
