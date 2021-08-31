import { CategoryCardWrapper } from '../styles';

const CategoryCard = ({value, label, background, categories}) => {

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
                    {categoryList.map((category) => (
                        <li {...category} key={category.id}>{category.label}</li>))
                    }
                 </ul>
            </div>           
        </CategoryCardWrapper>
    );
};

export default CategoryCard;