import {useState, forwardRef, useEffect} from 'react';
import { StyledForm,FormGroup, FormInput, FormSelect } from '../styles';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CategoriesSelect from './CategoriesSelect';

const filterDateOptions = [
    {
        label: 'All time',
        value: 'all-time'
    },
    {
        label: 'Month',
        value: 'month'
    },
    {
        label: 'Week',
        value: 'week'
    },
    {
        label: 'Period',
        value: 'period'
    }
];

export default function FilterForm({saveFilterParams, title}) {

    const [filterText, setFilterText] = useState('');
    const [filterDateOption, setFilterDateOption] = useState(filterDateOptions[0]);
    const [filterCategories, setFilterCategories] = useState([]);
    const [isPeriod, setIsPeriod] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const DateInput = forwardRef(({ value, onClick }, ref) => (
        <FormInput className="example-custom-input" onClick={onClick} ref={ref} defaultValue={value}/>
    ));
    
    const handleFilterTextChange = e => {
        const {value} = e.target;
        setFilterText(value);
    }

    const handleCategorySelect = e => {
        const categories = e.map(category => category.value);
        setFilterCategories(categories);
    }

    const handleFilterDateOptionSelect = e => setFilterDateOption(e);

    const handlePeriodChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    useEffect(()=> {
        setIsPeriod(filterDateOption.value === 'period');
    }, [filterDateOption]);

    useEffect(() => {
        saveFilterParams({
            filterText,
            filterDateOption,
            filterCategories,
            startDate,
            endDate
        });
    }, [filterText, filterDateOption, filterCategories, startDate, endDate]); 

    return(
        <StyledForm>
            <FormGroup>
                <FormInput 
                    value={filterText}
                    type='text' 
                    name='filter-text' 
                    id='filter-text' 
                    onChange={handleFilterTextChange}
                    placeholder='Search for...'
                />
            </FormGroup>
            <FormGroup>
                <CategoriesSelect 
                    id='filter-category' 
                    isMulti={true}
                    title={title} 
                    handler={handleCategorySelect}
                    defaultValue={filterCategories}
                    value={filterCategories}
                />
            </FormGroup>
            <FormGroup>
                <FormSelect 
                    onChange={handleFilterDateOptionSelect} 
                    id="filter"
                    defaultValue={filterDateOption}
                    value={filterDateOption}
                    options={filterDateOptions}
                />
            </FormGroup>
            <FormGroup className='period' isPeriod={isPeriod}>
                <DatePicker
                    selected={startDate}
                    startDate={startDate}
                    endDate={endDate}
                    name='start-date' 
                    id='filter-start-date' 
                    onChange={handlePeriodChange}
                    customInput={<DateInput/>}
                    selectsRange
                    dateFormat='dd/MM/yyyy'
                />
            </FormGroup>
        </StyledForm>
    );
}