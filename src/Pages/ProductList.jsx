import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import { mobile } from "../responsive";

const Container = styled.div`
  color: white;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    margin: "0px 20px",
    flexDirection: "column",
    alignItems: "centre",
    justifyContent: "center",
  })}
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0px 20px",
    display: " flex",
    flexDirection: "column",
    width: "200px",
  })}
`;
const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 10px;
  margin: 20px;
  background-color: transparent;
  margin-right: 20px;
  color: white;
  border-radius: 5px;
`;
const Option = styled.option`
  background-color: #0f0f0f;
  color: white;
  font-weight: 500;
  border-radius: 5px;
`;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Products : </FilterText>
          <Select>
            {" "}
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            {" "}
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select>
            {" "}
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Black (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
