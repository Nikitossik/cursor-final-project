import { CategoryCardWrapper } from '../styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { deleteChargesCategories } from '../../redux/chargesCategoriesSlice';
import { deleteIncomesCategories } from '../../redux/incomesCategoriesSlice';

const CategoryCard = ({ title, value, label, background, categories }) => {
const dispatch = useDispatch();
    let categoryList = [];
    categoryList = categories.filter(category => {
        return (category.groupCategory === value)
    });

    const handleClick = e => {
        const id = e.target.value;
        e.preventDefault();
        if (title === 'incomes'){
        dispatch(deleteIncomesCategories({
            id: id,
        }));
    }
        else if (title === 'charges') {
            dispatch(deleteChargesCategories({
                id: id,
            }));
        }
    }

    return (
        <CategoryCardWrapper>
            <img src={background} alt="img21"/>
            <div className="card-content">
                <h3>{label}</h3>
                <ul>
                    {categoryList.map((category) => (
                        <div className="category-item">
                            <li {...category} key={category.id}>{category.label}</li>
                            <button value={category.id} onClick={handleClick}>delete</button>
                            {/* <button value={category.id} onClick={handleClick}><FontAwesomeIcon className="icon-trash" icon={faTrashAlt} /></button> */}
                        </div>))
                    }
                 </ul>
            </div>           
        </CategoryCardWrapper>
    );
};

export default CategoryCard;