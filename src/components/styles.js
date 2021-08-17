import styled from "styled-components";

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

  .input-group__label{
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 5px;
  }

  .form-input, .form-select{
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
    background-color: #F9E8B4;
    color: #222;
`;