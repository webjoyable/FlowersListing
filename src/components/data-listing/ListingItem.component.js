import React from "react";
import styled from "styled-components";

const Remove = styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 3px 0 0 3px;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  opacity: 0;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
  }
`;

const ItemWrapper = styled.div`
  width: calc(100% / 3 - 20px);
  text-align: center;
  margin: 0 10px 20px 10px;
  padding: 20px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 20px 0px rgb(0 0 0 / 8%);
  position: relative;
  :hover ${Remove} {
    opacity: 1;
  }
`;

const Image = styled.div`
  height: 300px;
  overflow: hidden;
  border-radius: 3px;
  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const Name = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  letter-spacing: -1px;
`;

const LatinName = styled.div`
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
  border-radius: 3px;
  font-size: 0.9rem;
  padding: 0.3rem;
  margin-top: 1rem;
`;

const ListingItem = ({
  data: { name, latin_name, profile_picture },
  removeItem,
}) => {
  return (
    <ItemWrapper>
      <Remove onClick={removeItem}>Remove</Remove>
      <Image>
        <img alt={name} src={profile_picture} />
      </Image>
      <Name>{name}</Name>
      <LatinName>{latin_name}</LatinName>
    </ItemWrapper>
  );
};

export default ListingItem;
