import { CategoryCardWrapper } from '../styles';
import { useSelector } from 'react-redux';
import { selectChargesCategories } from '../../redux/chargesCategoriesSlice';

const CategoryCard = (group) => {

    const chargesCategories = useSelector(selectChargesCategories);
    let categoryList = [];
    categoryList = chargesCategories.filter(category => {
                    return (category.groupCategory === group.value)
                });

    return (
        <CategoryCardWrapper>
                        <img src={group.background} alt="img21"/>
                        <div className="card-content">
                            <h3>{group.label}</h3>
                <ul>
                    {categoryList.map((category) => (
                        <li {...category} key={category.id}>{category.label}</li>))}
                                </ul>
                        </div>           
                    </CategoryCardWrapper>
    );
};

export default CategoryCard;