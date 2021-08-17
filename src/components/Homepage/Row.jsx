function Row({category, description, date}){
    return (<div className='charge-item'>
        {`${category} - ${description} - ${date}`}
    </div>);
}

export default Row;