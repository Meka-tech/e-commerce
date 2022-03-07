import {
  Email,
  Instagram,
  LocationOn,
  PhoneIphone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;

  background-color: #090909;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  ${mobile({ fontSize: "18px" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ fontSize: "14px" })}
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 20px;
  ${mobile({ fontSize: "18px" })}
`;
const List = styled.ul`
  padding: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "14px" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        {" "}
        <Logo>MECHASTY.</Logo>{" "}
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt sed mauris non vulputate. Aliquam viverra est eget ligula
          pharetra, vel faucibus leo hendrerit. Cras porta eget dui nec
          hendrerit.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#bc2a8d">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#25D366">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color="#00ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <LocationOn style={{ marginRight: "10px" }} />
          14th Wayne Street , Gotham City
        </ContactItem>
        <ContactItem>
          {" "}
          <PhoneIphone style={{ marginRight: "10px" }} />
          +234777419
        </ContactItem>
        <ContactItem>
          {" "}
          <Email style={{ marginRight: "10px" }} />
          BruceWayne@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
