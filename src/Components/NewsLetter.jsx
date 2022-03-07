import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 10px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  background-color: #242424;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 30px;
  ${mobile({ textAlign: "centre", fontSize: "16px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #4141417a;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  padding-left: 20px;
  font-weight: 600;
  flex: 8;
`;
const Button = styled.button`
  background-color: #018dff;
  border-radius: 5px;
  flex: 1;
  border: none;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Description>KNOW WHEN YOUR FAVOURITE ITEMS ARE IN STOCK</Description>
      <InputContainer>
        <Input placeholder="YOUR EMAIL" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
