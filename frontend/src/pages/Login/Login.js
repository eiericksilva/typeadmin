import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;
export const Main = styled.main`
  width: 50%;
  min-width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 470px;
  margin-top: 32px;
`;
export const InputGroup = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid var(--white-100);
  border-radius: 4px;
  font-size: var(--fs-paragraph-2);
  padding-left: 24px;
  padding-right: 24px;
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 24px;
  display: flex;

  input {
    width: 20px;
    height: 20px;
    border: 1ox solid var(--white-100);
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  background-color: var(--blue-300);
  border: none;
  border-radius: 4px;
  color: var(--white-500);
  font-size: var(--fs-paragraph-2);
  cursor: pointer;
`;

export const Background = styled.div`
  flex: 1;
  background-color: var(--blue-300);
`;

export const BackgroundImage = styled.div`
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div``;
