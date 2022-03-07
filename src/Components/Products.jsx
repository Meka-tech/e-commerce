import React from "react";
import styled from "styled-components";
import { PopularProduct } from "../Data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  margin-top: 100px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Products = () => {
  return (
    <Container>
      {PopularProduct.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
