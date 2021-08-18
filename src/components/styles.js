import styled from "styled-components";
import wallet from "../assets/wallet1.jpg";
import { NavLink, Link } from 'react-router-dom';

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
  border-radius: 4px;
  border: 1px solid #222;
  padding: 10px 15px;
  width: 100%;
  font-size: 1rem;
  background-color: #f9e8b4;
  color: #222;
`;

export const AddButton = styled(Link)`
  width: 120px;
  min-width: 120px;
  border-radius: 4px;
  border: 1px solid #222;
  padding: 10px 15px;
  width: 100%;
  font-size: 1rem;
  background-color: #f9e8b4;
  color: #222;
  text-decoration: none;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.5;
  margin: 10px 0 40px 0;
`;

export const TabNav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #C4E2F2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TabLink = styled(NavLink)`
  min-width: 200px;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  color: rgba(0,0,0,0.7);
  position: relative;
  background: #fff;
  display: inline-block;
  height: 100%;
  
  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    background: #52BAF2;
  }

  &.${props => props.activeClassName}{
    color: #000;

    &::before{
      transform: scale(1);
    }

  }
`;