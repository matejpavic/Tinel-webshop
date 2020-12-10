import Logo from './Logo';
import Cart from './Cart';

const Header = ({showCart, handleShowCart}) => {
    return (
        <div className='header'>
            <Logo />
            <Cart showCart={showCart} handleShowCart={handleShowCart}/>
        </div>
    );
}

export default Header;