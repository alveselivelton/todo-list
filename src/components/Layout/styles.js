import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  background-color: #2c2e33;
  padding: 30px 15px;
  padding-bottom: 10px;
  border-radius: 10px;
  -webkit-box-shadow: -4px 4px 1px 0px rgba(92, 95, 102, 1);
  -moz-box-shadow: -4px 4px 1px 0px rgba(92, 95, 102, 1);
  box-shadow: -4px 4px 1px 0px rgba(92, 95, 102, 1);

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
  }
`;
