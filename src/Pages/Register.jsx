import React from "react";
import styled from "styled-components";
import BGImage from "../Images/Background.jpg";
import { mobile } from "../responsive";
const Container = styled.div`
  color: white;
  background-image: linear-gradient(rgba(26, 26, 26, 0.5), rgba(0, 0, 0, 1)),
    url(${BGImage});
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #0000009a;
  ${mobile({ width: "60%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  ${mobile({ fontSize: "16px" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  font-weight: 600;
  min-width: 50%;
  margin: 20px 30px 0px 0px;
  padding: 10px;
  background-color: transparent;
  color: white;
  border: solid 1px gray;
  border-radius: 10px;
`;
const Agreement = styled.span`
  font-size: 13px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 20%;
  border-radius: 5px;
  background-color: transparent;
  font-weight: 500;
  padding: 10px;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: black;

    border: 1px solid black;
  }
  ${mobile({ width: "fit-content" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Create an Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account , I consent to the processinfgof my personal
            data in accordance with the <b> PRIVACY POLICY</b>
          </Agreement>
        </Form>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
