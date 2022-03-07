import React from "react";
import styled from "styled-components";
import BGImage from "../Images/Electronics.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  color: white;
  background-image: linear-gradient(rgba(26, 26, 26, 0.5), rgba(0, 0, 0, 1)),
    url(${BGImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;

  width: 40%;
  background-color: #00000087;
  ${mobile({ width: "60%" })}
`;
const Title = styled.h1`
  font: 24px;
  font-weight: 300;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const Input = styled.input`
  flex: 1;
  font-weight: 600;
  min-width: 50%;
  margin: 10px 0;
  padding: 10px;
  background-color: transparent;
  color: white;
  border: solid 1px gray;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 20%;
  border-radius: 5px;
  background-color: transparent;
  font-weight: 500;
  padding: 10px;
  margin: 10px;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: black;

    border: 1px solid black;
  }
  ${mobile({ width: "fit-content", fontSize: "12px", padding: "10px 20px" })}
`;
const Link = styled.a`
  margin: 5px;
  font-size: 12px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOG IN</Button>
          <Link>FORGOT PASSWORD ?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
