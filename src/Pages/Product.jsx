import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div`
  color: white;
`;
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    alignItems: " center",
    margin: "20px 0px",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "40vh", width: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 30px;
  ${mobile({ padding: "0px 10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize: "25px" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ fontSize: "14px" })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ fontSize: "20px" })}
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ fontSize: "14px" })}
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  ${mobile({ width: "15px", height: "15px" })}
`;

const FilterSize = styled.select`
  color: white;
  background-color: #0f0f0f;
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: transparent;
  border: 1px solid gray;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.05);
    color: black;
    background-color: white;
    transition: all 0.2s ease;
  }
  ${mobile({ fontSize: "10px" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image
            src={require("../Images/ProductImages/varun-gaba-dcgB3CgidlU-unsplash.jpg")}
          />
        </ImgContainer>
        <InfoContainer>
          <Title>Nixon Camera</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            orci quam, ullamcorper vel mi vel, rutrum feugiat nisi. Integer
            rutrum lacinia iaculis. Mauris at ex mollis, varius massa at,
            fermentum tellus
          </Desc>
          <Price>1000 Naira</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
