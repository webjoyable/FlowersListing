import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.center ? "100vh" : "100%")};
`;

const Content = styled.div`
  background: #fff;
  padding: 3rem;
  border-radius: 3px;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  position: relative;
  &:before {
    content: "";
    background: rgb(255 255 255 / 18%);
    width: calc(100% + 60px);
    height: calc(100% - 60px);
    display: block;
    position: absolute;
    z-index: -1;
    top: 30px;
    left: -30px;
    border-radius: 3px;
  }
`;

const Container = ({ children, width, height, center }) => {
  return (
    <Wrapper center={center}>
      <Content width={width} height={height}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Container;
