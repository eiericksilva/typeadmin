import { Close, Container, Content } from "./Alert";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";

import React from "react";

const Alert = ({ isError, setIsError }) => {
  return (
    <Container>
      <Content>
        <AiFillCloseCircle size={35} />
        <p className="fs-paragraph-1">
          Usuário ou senha incorretos. Por favor, tente novamente
        </p>
      </Content>
      <Close>
        <AiOutlineClose size={20} onClick={() => setIsError(false)} />
      </Close>
    </Container>
  );
};

export default Alert;
