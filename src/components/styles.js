import styled from "styled-components";
import wallet from "../assets/wallet1.jpg";
import { NavLink, Link } from "react-router-dom";
import Select from 'react-select';
import DatePicker from 'react-datepicker';

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

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 7px;
`;

export const StyledAddForm = styled(StyledForm)`
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

export const AddButton = styled.button`
  width: 160px;
  min-width: 160px;
  font-size: 1rem;
  background-color: #569FFF;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 4px;
  padding: 10px 15px;
  outline: none;
  font-size: 1rem;
  transition: 100ms all;
`;

export const FormButton = styled(AddButton)`
  width: 100%;
`;

export const FormTitle = styled.h2`
  color:#222;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 10px;
  text-align: left;
`;

export const FormGroup = styled.div`
  min-width: 150px;
  margin: 0 5px 5px 5px;


  &.period{
    display: ${props => props.isPeriod ? "block" : "none"};
  }

  &.fullwidth{
    min-width: unset;
    width: 100%;
    margin: 5px 0;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  min-height: 40px;
  border: 2px solid #CCCCCC;
  border-radius: 4px;
  padding: 2px 8px;
  outline: none;
  font-size: 1rem;
  transition: 100ms all;

  &:focus-visible, &:focus, &:focus-within{
    border: 2px solid #2684ff;
  }

  &[type='radio'].sort-radio{
    display: none;
  }

  &[type='radio'].sort-radio:checked + label{
    border: 2px solid #2684ff;
  }
`;

export const FormLabel = styled.label`
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.5;
  margin-right: 5px;
  user-select: none;
`;

export const SortLabel = styled(FormLabel)`
  margin-right: 3px;
  font-size: 1rem;
  min-height: 40px;
  padding: 10px 8px;
  border: 2px solid #CCCCCC;
  background-color: #fff;
  border-radius: 4px;
  cursor:pointer;
  transition: 100ms all;
`;

export const FormSelect = styled(Select)`
  width: 100%;
  font-size: 1rem;
  border: 1px solid #333;
  border: 1px solid #CCCCCC;
  border-radius: 4px;

  .option-icon {
    margin-right: 10px;
    font-size: 1rem;
    color: #23285f;
  }
`;

export const FormToggler = styled.input`
  &[type='checkbox']{
    -webkit-appearance: none;
    appearance: none;
    border-radius: 20px;
    width: 2rem;
    height: 1rem;
    margin-left: 5px;
    background: #ccc;
    transition: 100ms all;
    position: relative;
  }

  &[type='checkbox']:checked{
    background-color: #2684ff;
  }

  &[type='checkbox']::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background-color: #fff;
    width: 1rem;
    height: 1rem;
    transform: scale(1.2);
    box-shadow: rgba(0,0,0,0.4) 0 0 5px; 
    transition: 100ms all;
  }

  &[type='checkbox']:checked::before{
    left: 1rem;
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
    padding: 15px 0 15px 10px;
    border-radius: 7px;
    & .category-item {
      display: flex;
      justify-content: space-between;
    }
    & .icon-trash {
      pointer-events: none;
      user-select: none;
    }
    ul {
      padding: 10px;
    }
    li {
      font-size: 12px;
    }
    button {
      padding: 0;
      font-size: 11px;
      height: 13px;
      cursor: pointer;
    }
  }
`;

export const StyledFilterForm = styled(StyledSortForm)`
  & .filter-label {
    font-size: 1rem;
    line-height: 1.5;
    margin-right: 5px;
  }

  & .filter-select {
    padding: 8px 15px;
    font-size: 0.8rem;
    border-radius: 4px;
    min-width: 200px;
    margin-right: 10px;
  }


export const SectionHeader = styled.header`
  display: flex;
  padding: 10px 0 20px 0;
  .forms-block{
    flex: 1 0 80%;
    display: flex;
    flex-direction: column;
  }
  .button-block{
    flex: 1 0 20%;
  }
`;