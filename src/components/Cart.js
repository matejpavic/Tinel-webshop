import ShoppingCart from '../styles/assets/ShoppingCart.svg';

const Cart = ({showCart, handleShowCart}) => {
    if (!showCart) {
        return (
            <div className='cart'>
                <img src={ShoppingCart} alt='Shopping cart' onClick={handleShowCart}/>
            <span>Cart is Empty</span>
            </div>
        );
    }
    else {
        return (
            <div className='expand'>
                This is expanded shoping cart!
            </div>
        );
    }
}

export default Cart;