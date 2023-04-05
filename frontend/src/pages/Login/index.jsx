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
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const authenticate = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/auth";

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

    if (response.status === 200) {
      Cookies.set("token", data.token, {
        expires: lembrar ? 30 : null,
      });

      navigate("/app");
    }

    if (response.status === 404) {
      setIsError(true);
    }
  };
  return (
    <Container>
      <Main>
        <Content>
          <h2>Bem vindo de volta</h2>
          <p className="fs-paragraph-2">
            Insira suas informações abaixo para acessar seu painel
          </p>
          {isError ? <Alert isError={isError} setIsError={setIsError} /> : null}
          <Form onSubmit={authenticate}>
            <InputGroup>
              <label className="fs-paragraph-1">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <label className="fs-paragraph-1">Senha</label>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
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
