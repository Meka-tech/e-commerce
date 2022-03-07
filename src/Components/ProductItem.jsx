import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import React, { useEffect } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 20px;
  margin-bottom: 100px;
  min-width: 350px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebfaff21;
  position: relative;
  z-index: 3;

  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.02);
  }
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  background-color: #1d1d1dab;
`;
const Image = styled.img`
  height: 30vh;
  max-width: 30vh;
  border-radius: 10px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const ProductItem = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <Container data-aos="fade-left">
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
