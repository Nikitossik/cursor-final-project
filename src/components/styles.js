import styled from "styled-components";
import wallet from "../assets/wallet1.jpg";
import { NavLink, Link } from "react-router-dom";

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
export const AddFormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &.inactive {
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
  }

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
export const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  box-shadow: 1px 1px 2px #000;
  background-color: rgb(238, 238, 238);
  padding: 15px;
  border-radius: 5px;
  position: relative;
  .close-btn {
    border: none;
    width: 10px;
    text-align: right;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const InputGroup = styled.div`
  margin: 5px 0 10px;
  width: 100%;

  .input-group__label {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 5px;
  }

  .form-input {
    padding: 8px 15px;
    font-size: 0.8rem;
    border: 1px solid #222;
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
    display: block;
  }

  .form-select {
    font-size: 0.8rem;
    border: 1px solid #222;
    border-radius: 4px;
  }

  .option-icon{
    margin-right: 10px;
    font-size: 1rem;
    color: #23285F;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  border: 1px solid #222;
  padding: 10px 15px;
  max-width: 100%;
  min-width: 120px;
  font-size: 1rem;
  background-color: #f9e8b4;
  color: #222;
  cursor: pointer;
`;

export const AddButton = styled.button`
  width: 160px;
  min-width: 160px;
  border-radius: 4px;
  border: 1px solid #222;
  padding: 10px 15px;
  font-size: 0.9rem;
  background-color: #f9e8b4;
  color: #222;
  text-decoration: none;
  cursor: pointer;
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
  background-color: #c4e2f2;
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
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  background: #fff;
  display: inline-block;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    background: #52baf2;
  }

  &.${(props) => props.activeClassName} {
    color: #000;

    &::before {
      transform: scale(1);
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 30px;

  & .message-title {
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 500;
    color: #4c83ca;
  }

  & .message-image {
    margin-top: 30px;
    display: block;
    max-width: 350px;
    height: auto;
    object-fit: cover;
  }
`;

export const StyledSortForm = styled.form`
  min-width: 120px;
  display: flex;
  align-items: center;

  & .sort-label{
    font-size: 1rem;
    line-height: 1.5;
    margin-right: 5px;
  }

  & .sort-select{
    padding: 8px 15px;
    font-size: 0.8rem;
    border: 1px solid #222;
    border-radius: 4px;
    min-width: 120px;
    margin-right: 10px;
  }
  

  & .reverse-checkbox{
    margin-right: 10px;
  }
`;

export const StyledFilterForm = styled(StyledSortForm)`

  & .filter-label{
    font-size: 1rem;
    line-height: 1.5;
    margin-right: 5px;
  }

  & .filter-select{
    padding: 8px 15px;
    font-size: 0.8rem;
    border: 1px solid #222;
    border-radius: 4px;
    min-width: 120px;
    margin-right: 10px;
  }

  & .filter-input {
    padding: 8px 15px;
    font-size: 0.8rem;
    border: 1px solid #222;
    border-radius: 4px;
    min-width: 120px;
    display: block;
  }

  & .filter-input[type='date'] {
    display: ${props => props.isPeriod ? 'block' : 'none'};
  }

`;

export const CategoryBlock = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
`;

export const CategoryCardWrapper = styled.div`
position: relative;
color: white;
align-items: center;
width: 24%;
max-height: 120px;
border-radius: 7px;
margin-right: 10px;
margin-top: 15px;
img {
  width: 100%;
  max-height: 120px;
  border-radius: 7px;
}

  & .card-content {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 7px;
  ul {
    padding: 10px 20px;
  }
  li {
    font-size: 12px;
  }
}
`;
