import {useState} from 'react';
import { StyledSortForm, Button } from '../styles';

export default function SortForm({saveSortParams}) {

    const [sortOption, setSortOption] = useState('money');
    const [isReverse, setIsReverse] = useState(false);
    
    const handleSortChange = e => {
        const {name, value, checked} = e.target;

        switch (name) {
            case 'sort-option':
                setSortOption(value);
                break;
            case 'reverse':
                setIsReverse(checked);
                break;
            default:
                break;
        }
    }

    const handleSortClick = e => {
        e.preventDefault();
        saveSortParams({
            sortOption,
            isReverse
        });
    }

    return(
        <StyledSortForm>
            <label htmlFor="sort" className='sort-label'>Sort by: </label>
            <select 
                onChange={handleSortChange} 
                className='sort-select' 
                name="sort-option" 
                id="sort"
                value={sortOption}>
                    <option value="money">Money</option>
                    <option value="description">Description</option>
                    <option value="date">Date</option>
                    <option value="category">Category</option>
            </select>
            <label htmlFor="reverse" className='sort-label'>Reverse</label>
            <input
                type="checkbox" 
                name='reverse' 
                id='reverse'
                checked={isReverse}
                onChange={handleSortChange}
                value={isReverse}
            />
            <Button onClick={handleSortClick}>Sort</Button>
        </StyledSortForm>
    );
}