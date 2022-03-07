import React, { useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import "aos/dist/aos.css";
import Aos from "aos";

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "38vh" })}
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  box-shadow: 5px 5px 8px black;
  border-radius: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.02);
  }
  &:hover ${Image} {
    filter: blur(1px);
  }
  ${mobile({ boxShadow: "none", margin: "20px 0px" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.h1`
  font-size: 35px;
  font-weight: 1000;
  color: #000000;
  margin-bottom: 20px;
  background-color: #ffffff75;
  padding: 10px;
  ${mobile({ fontSize: "25px" })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    margin-left: 20px;

    color: white;
    background-color: black;
  }
`;
const CategoryItem = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container data-aos="fade-up">
      <Image src={item.img} />
      <Info>
        <Header>{item.title}</Header>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
