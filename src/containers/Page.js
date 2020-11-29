import Filter from '../components/Filter';
import WorkShopsList from '../components/WorkShopsList';
import DropdownMenu from '../components/DropdownMenu';

function Page() {
    return (
        <div className='containerPage' >
           <Filter />
           <DropdownMenu />
           <WorkShopsList />
        </div>
    );
}

export default Page;