import Filter from '../components/Filter';
import DropdownMenu from '../components/DropdownMenu';
import Main from '../components/Main';

function Page({workshops, displayed, handleDisplayed}) {
    return (
        <div className='containerPage' >
           <Filter />
           <DropdownMenu />
           <Main workshops = {workshops} displayed = {displayed} handleDisplayed = {handleDisplayed} />
        </div>
    );
}

export default Page;