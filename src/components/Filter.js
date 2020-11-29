import DesignLogo from '../styles/assets/DesignLogo.svg';
import FrontendLogo from '../styles/assets/FrontendLogo.svg';
import BackendLogo from '../styles/assets/BackendLogo.svg';
import MarketingLogo from '../styles/assets/MarketingLogo.svg';

const Filter = () => {
    return (
        <div className='filter'>
            <h6>Filter by category:</h6>
            <div className='pushRight'>
                <div className='oneLine pushAll'>
                    <span>All</span>
                </div>
                <div className='oneLine'>
                    <img src={DesignLogo} alt='logo'/><span>Design</span>
                </div>
                <div className='oneLine'>
                    <img src={FrontendLogo} alt='logo'/><span>Frontend</span>
                </div>
                <div className='oneLine'>
                    <img src={BackendLogo} alt='logo'/><span>Backend</span>
                </div>
                <div className='oneLine'>
                    <img src={MarketingLogo} alt='logo'/><span>Marketing</span>
                </div>
            </div>
        </div>
    );
}

export default Filter;