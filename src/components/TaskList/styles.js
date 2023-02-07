import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin: 30px 0;
  padding: 10px;
  background-color: #202020;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 18px;
    text-decoration: ${({ completed }) => (completed ? "line-through" : "")};
  }
`;

export const OptionsConteiner = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  color: ${({ completed }) => (completed ? "#32CD32" : "#fff")};
  background-color: transparent;
  border: none;
  font-size: 18px;
`;
