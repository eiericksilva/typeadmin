import React from "react";
import {
  Background,
  BackgroundImage,
  Button,
  CheckboxGroup,
  Container,
  Content,
  Form,
  Input,
  InputGroup,
  Main,
} from "./Login";

const Login = () => {
  return (
    <Container>
      <Main>
        <Content>
          <h2>Bem vindo de volta</h2>
          <p className="fs-paragraph-2">
            Insira suas informações abaixo para acessar seu painel
          </p>
          <Form>
            <InputGroup>
              <label className="fs-paragraph-1">Email</label>
              <Input type="email" />
            </InputGroup>
            <InputGroup>
              <label className="fs-paragraph-1">Senha</label>
              <Input type="password" />
            </InputGroup>
            <CheckboxGroup>
              <input type="checkbox" />
              <label> Lembrar de mim</label>
            </CheckboxGroup>
            <div>
              <Button>Entrar</Button>
            </div>
          </Form>
        </Content>
      </Main>
      <Background>
        <BackgroundImage></BackgroundImage>
      </Background>
    </Container>
  );
};

export default Login;
