import Logo from './Logo';
import Cart from './Cart';

const Header = ({showCart, handleShowCart, workshopsInTheCart}) => {
    return (
        <div className='header'>
            <Logo />
            <Cart showCart={showCart} handleShowCart={handleShowCart} workshopsInTheCart={workshopsInTheCart}/>
        </div>
    );
}

export default Header;