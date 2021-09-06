import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {components} from 'react-select';
import {FormSelect} from '../styles'

import { selectChargesCategories } from '../../redux/chargesCategoriesSlice';
import { selectIncomesCategories } from '../../redux/incomesCategoriesSlice';

const {Option} = components;

const IconOption = (props) => {
    return (
        <Option {...props}>
            <span className='option-icon'>
                <FontAwesomeIcon icon={props.data.icon}/>
            </span>
            {props.label}
      </Option>
    );
}

export default function CategoriesSelect({title, className, handler, isMulti}) {
    const chargesCategories = useSelector(selectChargesCategories);
    const incomesCategories = useSelector(selectIncomesCategories);
    const selectCategories = title === 'charge' ? chargesCategories : incomesCategories;

    return (
        <FormSelect 
            name='category'
            id="category"
            isMulti={isMulti}
            isSearchable 
            className={className}  
            options={selectCategories}
            components={{Option: IconOption}}
            onChange={handler}
        />
    );
}