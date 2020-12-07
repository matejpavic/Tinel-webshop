import MainLogo from '../styles/assets/MainLogo.svg';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div className='logo'>
        <Link to='/'>
            <img src={MainLogo} alt='Tinel Workshop' />
        </Link>
        </div>
    );
}

export default Logo;