import { CategoryCardWrapper} from '../styles';
import CategoryItem from './CategoryItem';

const CategoryCard = ({ title, value, label, background, categories }) => {

    let categoryList = [];
    categoryList = categories.filter(category => {
        return (category.groupCategory === value)
    });


    return (
        <CategoryCardWrapper>
            <img src={background} alt="img21"/>
            <div className="card-content">
                <h3>{label}</h3>
                <ul>
                    {categoryList.map(category => (
                        <CategoryItem {...category} className="category-item" key={category.id} title={title}/>))}
                 </ul>
            </div>           
        </CategoryCardWrapper>
    );
};

export default CategoryCard;