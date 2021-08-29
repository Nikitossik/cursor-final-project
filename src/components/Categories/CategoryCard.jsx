import { CategoryCardWrapper} from '../styles';

const CategoryCard = (group) => {
    return (
        <CategoryCardWrapper>
                        <img src={group.background} alt="img21"/>
                        <div className="card-content">
                            <h3>{group.title}</h3>
                            <ul>
                                <li>Category 1</li>
                                <li>Category 2</li>
                    <li>Category 3</li>
                                </ul>
                        </div>           
                    </CategoryCardWrapper>
    );
};

export default CategoryCard;