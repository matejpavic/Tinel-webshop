import ShoppingCart from '../styles/assets/ShoppingCart.svg';

const Cart = ({showCart, handleShowCart, workshopsInTheCart}) => {
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
                <img src={ShoppingCart} alt='Shopping cart' />
                <span>{workshopsInTheCart} workshops</span><span className='exit' onClick={handleShowCart}>x</span>
            </div>
        );
    }
}

export default Cart;