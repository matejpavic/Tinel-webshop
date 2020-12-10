import ShoppingCart from '../styles/assets/ShoppingCart.svg';

const Cart = () => {
        return (
            <div className='cart'>
                <img src={ShoppingCart} alt='Shopping cart'/>
                <span>Cart is Empty</span>
            </div>
        );
}

export default Cart;