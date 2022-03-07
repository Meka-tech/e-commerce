import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

import { Category } from "../Data";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  color: white;
  ${mobile({ padding: "0", flexDirection: " column" })}
`;

const Categories = () => {
  return (
    <Container>
      {Category.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
