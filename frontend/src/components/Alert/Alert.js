import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--error);
  padding: 16px;
  width: 470px;

  margin-top: 20px;

  justify-content: space-between;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;

  p {
    max-width: 266px;
    margin-left: 16px;
  }

  svg {
    color: red;
  }
`;
export const Close = styled.div`
  svg {
    opacity: 0.4;
    cursor: pointer;
  }
`;
