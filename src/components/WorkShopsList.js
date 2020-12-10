import Card from './Card';

const WorkShopsList = ({workshops, displayed}) => {
    return (
        <div className='workShopsList'>
            {
                workshops.slice(0, displayed).map(workshop => {
                    return (
                        <Card 
                            key={workshop.id}
                            image={workshop.imageUrl}
                            dateAndTime={workshop.date}
                            title={workshop.title}
                            price={workshop.price}
                        />
                    )
                })
            }
        </div>
    );
}

export default WorkShopsList;