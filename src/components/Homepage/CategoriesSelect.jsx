import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select, {components} from 'react-select';

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
        <Select 
            name='category'
            id="category"
            isMulti={isMulti}
            isSearchable 
            isClearable 
            className={className}  
            options={selectCategories}
            components={{Option: IconOption}}
            onChange={handler}
        />
    );
}