import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
// import TableRow from "./components/TableRow";

const TableWrapper = styled.div`
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
const Table = () => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Money</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon icon={faUtensils} />
              Food
            </td>
            <td>Dinner with John</td>
            <td>17/08/2021</td>
            <td>$ 13.00</td>
            <td>
              <button>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </td>
          </tr>
          <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
          </tr>
          {/* {charges.map((charge) => (
        <TableRow {...charge} key={charge.id} />
        ))} */}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
