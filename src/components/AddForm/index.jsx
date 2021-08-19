import {AddFormWrapper,StyledAddForm, InputGroup, Button} from '../styles';


function AddForm({active, setActive}) {
    return (
        <AddFormWrapper className={active ? "active": "inactive"} onClick={() => setActive(false)}>
        <StyledAddForm onClick={e =>e.stopPropagation()}>
            <h1>Add new charge</h1>
            <InputGroup>
                <label htmlFor='total-sum' className="input-group__label">Total</label>
                <input name='total-sum' id='total-sum' type="number" min='0' className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='description' className="input-group__label">Description</label>
                <input name='description' id='description' type="text" className='form-input'/>
            </InputGroup>
            <InputGroup>
                <label htmlFor='category' className="input-group__label">Select category</label>
                <select name='category' id='category' className='form-select'>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                    <option value="Option length">Option that has too long of a value to fit</option>
                </select>
            </InputGroup>
            <InputGroup>
                <label htmlFor='date' className="input-group__label">Select Date</label>
                <input name='date' id='date' type="date" className='form-input'/>
            </InputGroup>
            <Button>Add new income</Button>
        </StyledAddForm>
        </AddFormWrapper>
    );
}

export default AddForm;