import {useState, useEffect} from 'react';
import { StyledForm, FormInput, FormLabel, SortLabel, FormGroup, FormToggler} from '../styles';

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

    useEffect(() => {
        saveSortParams({
            sortOption,
            isReverse
        });
    }, [sortOption, isReverse]);

    return(
        <StyledForm>
            <FormGroup>
                <FormLabel htmlFor="sort">Sort by: </FormLabel>
                
                <FormInput onChange={handleSortChange} type="radio" className='sort-radio' name='sort-option' id='money' value='money'/>
                <SortLabel htmlFor="money">Money</SortLabel>

                <FormInput onChange={handleSortChange} type="radio" className='sort-radio' name='sort-option' id='description' value='description'/>
                <SortLabel htmlFor="description">Description</SortLabel>
                
                <FormInput onChange={handleSortChange} type="radio" className='sort-radio' name='sort-option' id='date' value='date'/>
                <SortLabel htmlFor="date">Date</SortLabel>
                
                <FormInput onChange={handleSortChange} type="radio" className='sort-radio' name='sort-option' id='sort-category' value='category'/>
                <SortLabel htmlFor="sort-category">Category</SortLabel>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="reverse">Reverse</FormLabel>
                <FormToggler
                    type="checkbox" 
                    name='reverse' 
                    id='reverse'
                    checked={isReverse}
                    onChange={handleSortChange}
                    value={isReverse}
                />
            </FormGroup>
        </StyledForm>
    );
}