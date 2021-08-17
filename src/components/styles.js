import styled from "styled-components";

export const TableWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  table {
    box-shadow: 1px 1px 32px -6px #000000;
    border-spacing: 0;
    border-radius: 10px;
    font-size: 12px;
    font-weight: normal;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    thead {
      color: #ffffff;
      background: black;
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    tbody tr:nth-child(odd) {
      background: rgb(238, 238, 238);
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
  }
`;