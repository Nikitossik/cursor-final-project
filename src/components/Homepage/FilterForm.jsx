import { useEffect } from 'react';
import {useState} from 'react';
import { StyledFilterForm, Button } from '../styles';

import CategoriesSelect from './CategoriesSelect';

export default function FilterForm({saveFilterParams, title}) {

    const [filterText, setFilterText] = useState('');
    const [filterDateOption, setFilterDateOption] = useState('all-time');
    const [filterCategories, setFilterCategories] = useState([]);
    const [isPeriod, setIsPeriod] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    const handleFilterChange = e => {
        const {name, value, checked} = e.target;

        switch (name) {
            case 'filter-text':
                setFilterText(value);
                break;
            case 'filter-date-option':
                setFilterDateOption(value);
                break;
            case 'start-date': 
                setStartDate(value);
                break;
            case 'end-date': 
                setEndDate(value);
                break;
            default:
                break;
        }
    }

    useEffect(()=> {
        setIsPeriod(filterDateOption === 'period');
    }, [filterDateOption]);

    const handleFilterClick = e => {
        e.preventDefault();
        saveFilterParams({
            filterText,
            filterDateOption,
            filterCategories,
            startDate,
            endDate
        });
    }

    const handleCategorySelect = e => {
        const categories = e.map(category => category.value);
        setFilterCategories(categories);
    }

    return(
        <StyledFilterForm isPeriod={isPeriod}>
            <label htmlFor="filter-text" className='filter-label'/>
            <input 
                value={filterText} 
                type='text' 
                name='filter-text' 
                id='filter-text' 
                className='filter-input'
                onInput={handleFilterChange}
            />

            <label htmlFor='filter-category' className='filter-label'/>
            <CategoriesSelect 
                id='filter-category' 
                isMulti={true}
                title={title} 
                handler={handleCategorySelect}
                className='filter-select'
                value={filterCategories}
            />

            <label htmlFor="filter" className='filter-label'>Filter by: </label>
            <select 
                onChange={handleFilterChange} 
                className='filter-select' 
                name="filter-date-option" 
                id="filter"
                value={filterDateOption}>
                    <option value="all-time">All time</option>
                    <option value="month">This month</option>
                    <option value="week">This week</option>
                    <option value="period">Period</option>
            </select>

            <input
                value={startDate} 
                type='date' 
                name='start-date' 
                id='filter-start-date' 
                className='filter-input'
                onInput={handleFilterChange}
            />
            <input
                value={endDate} 
                type='date' 
                name='end-date' 
                id='filter-end-date' 
                className='filter-input'
                onInput={handleFilterChange}
            />

            <Button onClick={handleFilterClick}>Filter</Button>
        </StyledFilterForm>
    );
}