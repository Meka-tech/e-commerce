import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";
const Container = styled.div`
  color: white;
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  color: ${(props) => (props.type === "filled" ? "black" : "white")};
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) =>
    props.type === "filled" ? "white" : "transparent"};
  border: ${(props) =>
    props.type === "filled" ? "1px solid black" : " 1px solid white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Hr = styled.hr`
  background-color: #212121;
  border: none;
  height: 1px;
  margin-top: 20px;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "15px", fontSize: "16px" })}
`;
const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px", fontSize: "16px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #212121;
  border-radius: 5px;
  padding: 20px;
  height: 50vh;
  ${mobile({ margin: "15px 0px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  background-color: white;
  color: #000000;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid white;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title> CART </Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText> Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image
                  src={require("../Images/ProductImages/varun-gaba-dcgB3CgidlU-unsplash.jpg")}
                />
                <Details>
                  <ProductName>
                    <b>Product : </b> LIGHTNING QUICK SHUTTER
                  </ProductName>
                  <ProductId>
                    Product <b> ID </b>: 567890
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size :</b> lg
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice># 4000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image
                  src={require("../Images/ProductImages/alex-motoc-0POwK6iAiRQ-unsplash.jpg")}
                />
                <Details>
                  <ProductName>
                    <b>Product : </b> Xbox Controller
                  </ProductName>
                  <ProductId>
                    Product <b> ID </b>: 567891
                  </ProductId>
                  <ProductColor color="white" />
                  <ProductSize>
                    <b>Size :</b> sm
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice># 4000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>subtotal</SummaryItemText>
              <SummaryItemPrice># 8000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice># 600</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>10 %</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total : </SummaryItemText>
              <SummaryItemPrice>8550</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
