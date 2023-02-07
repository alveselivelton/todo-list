import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  margin-top: 30px;
  background-color: #2c2e33;
  padding: 30px 15px;
  padding-bottom: 10px;
  border-radius: 10px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
