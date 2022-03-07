import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive.js";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: black;
  color: white;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: 2 })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`;
const Input = styled.input`
  border: none;
  border-radius: 2px;
  margin-right: 5px;
  background-color: #1b1b1b;
  font-weight: 600;
  padding-left: 5%;
  padding-right: 10%;
  color: white;
  ${mobile({ width: "80px", fontSize: "12px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "16px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {" "}
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "lightgray", fontSize: 16 }} />
          </SearchContainer>
        </Left>{" "}
        <Center>
          <Link className="Link" to="/">
            <Logo>MECHASTY.</Logo>{" "}
          </Link>
        </Center>{" "}
        <Right>
          {" "}
          <Link className="Link" to="/Register">
            {" "}
            <MenuItem>Register</MenuItem>
          </Link>
          <Link className="Link" to="/Login">
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link className="Link" to="/Cart">
            <MenuItem>
              {" "}
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>{" "}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
