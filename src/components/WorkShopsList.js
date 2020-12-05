import Card from './Card';

const WorkShopsList = ({workshops, displayed}) => {
    return (
        <div className='workShopsList'>
            <Card workshops = {workshops} displayed = {displayed}/>
        </div>
    );
}

export default WorkShopsList;