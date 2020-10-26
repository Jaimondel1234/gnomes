import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
  FlexStyle,
  PanelStyle,
  ButtonStyle,
  TextStyle,
  InputStyle,
} from "../styles/core";
import styled from "styled-components";

const LoginInputStyle = styled(InputStyle)`
  border-radius: 7px;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 20px;
  max-width: 400px;
  padding: 12px;
`;

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <PanelStyle bg="#1E90FF" color="#ffff" borderRadius={10}>
      <TextStyle
        fontSize="60px"
        fontWeight="bold"
        textShadow="2px 2px 4px #000000"
        pb="20px"
        pt="25vh"
      >
        Login
      </TextStyle>

      <FlexStyle
        as="form"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        onSubmit={handleLogin}
      >
        <LoginInputStyle
          type="text"
          placeholder="Your email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <LoginInputStyle
          type="password"
          placeholder="Your password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <ButtonStyle
          primary
          p="12px"
          fontSize="22px"
          fontWeight="bold"
          maxWidth="400px"
          type="submit"
        >
          Send
        </ButtonStyle>
      </FlexStyle>
    </PanelStyle>
  );
};
