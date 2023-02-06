import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Input = styled.input`
  width: 75%;
  height: 40px;
  padding-left: 10px;
  font-size: 18px;
  outline: none;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (max-width: 500px) {
    width: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export const Button = styled.button`
  width: 25%;
  height: 40px;
  color: #fff;
  font-size: 18px;
  background-color: #0000cd;
  opacity: 0.8;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 500px) {
    width: 60%;
    margin: 0 auto;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
