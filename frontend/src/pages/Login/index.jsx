import React, { useState } from "react";
import Cookies from "js-cookie";
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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const authenticate = async (e) => {
    const url = "http://localhost:3000/auth";
    e.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        senha,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    Cookies.set("token", data.token, {
      expires: lembrar ? 30 : null,
    });
  };
  return (
    <Container>
      <Main>
        <Content>
          <h2>Bem vindo de volta</h2>
          <p className="fs-paragraph-2">
            Insira suas informações abaixo para acessar seu painel
          </p>
          <Form onSubmit={authenticate}>
            <InputGroup>
              <label className="fs-paragraph-1">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label className="fs-paragraph-1">Senha</label>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </InputGroup>
            <CheckboxGroup>
              <input
                type="checkbox"
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
              />
              <label> Lembrar de mim</label>
            </CheckboxGroup>
            <div>
              <Button type="submit">Entrar</Button>
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
