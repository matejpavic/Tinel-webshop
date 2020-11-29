import DesignLogo from '../styles/assets/DesignLogo.svg';
import FrontendLogo from '../styles/assets/FrontendLogo.svg';
import BackendLogo from '../styles/assets/BackendLogo.svg';
import MarketingLogo from '../styles/assets/MarketingLogo.svg';
import DropdownArrow from '../styles/assets/DropdownArrow.svg';

const Design = "Design";

const DropdownMenu = () => {
    return (
        <div className='dropdownMenu'>
            <img src={DropdownArrow} />
            <div>{Design}</div>
        </div>
    );
}

export default DropdownMenu;