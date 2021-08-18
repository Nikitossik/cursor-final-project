import styled from "styled-components";
import wallet from "../image/wallet1.jpg";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 190px;
  background: linear-gradient(to right, white, black);
  display: flex;
  justify-content: flex-end;
`;

export const HeaderBalanceBlock = styled.div`
  padding: 5px;
  background-image: url(${wallet});
  background-size: cover;
  width: 150px;
  height: 100%;
`;
export const HeaderContent = styled.div`
  padding: 50px 10px;
  color: #f9e8b4;
  text-transform: uppercase;
`;

export const HeaderBalance = styled.h5`
  color: rgb(255, 255, 255);
`;

export const TableWrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const StyledTable = styled.table`
  box-shadow: 1px 1px 32px -6px #000000;
  border-spacing: 0;
  border-radius: 10px;
  font-size: 12px;
  font-weight: normal;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  tr:nth-child(even) {
    background: #f8f8f8;
  }
  th,
  td {
    margin: 0;
    padding: 0.5rem;
    :last-child {
      border-right: 0;
    }
    button {
      border: none;
    }
  }

  thead {
    color: #ffffff;
    background: black;
  }
  tbody tr:nth-child(odd) {
    background: rgb(238, 238, 238);
  }
`;

export const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

export const InputGroup = styled.div`
  margin: 5px 0 10px;
  width: 100%;

  .input-group__label {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 5px;
  }

  .form-input,
  .form-select {
    padding: 10px 15px;
    font-size: 0.8rem;
    border: 1px solid #222;
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
    display: block;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #222;
  padding: 10px 15px;
  width: 100%;
  font-size: 1rem;
  background-color: #f9e8b4;
  color: #222;
`;
