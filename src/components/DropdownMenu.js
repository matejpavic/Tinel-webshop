import DropdownArrow from '../styles/assets/DropdownArrow.svg';
import PropTypes from 'prop-types';

const DropdownMenu = ({showMenu, handleShowMenu}) => {
       if (!showMenu) {
        return (
            <div className='dropdownMenu'>
                <div>
                    <img src={DropdownArrow} 
                    alt=''
                    onClick = {handleShowMenu} />
                    <span className='dropdownMenu__selected'>All</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className='dropdownMenu'>
                <div>
                    <img src={DropdownArrow} 
                    alt='' 
                    className='dropdownMenu__closeButton'
                    onClick = {handleShowMenu} />
                    <span className='dropdownMenu__selected'>All</span>
                </div>
                <div>
                    <span>Design</span>
                </div>
                <div>
                    <span>Frontend</span>
                </div>
                <div>
                    <span>Backend</span>
                </div>
                <div>
                    <span>Marketing</span>
                </div>
            </div>
        )
    }
    
}

DropdownMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    handleShowMenu: PropTypes.func.isRequired
  };

export default DropdownMenu;