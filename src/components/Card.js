import Calendar from '../styles/assets/Calendar.svg';
import Watch from '../styles/assets/Watch.svg';
import ShoppingCart from '../styles/assets/ShoppingCart.svg';
import {Link} from "react-router-dom";


const Card = ({key, image, dateAndTime, title, price}) => {
    return (
        <div key={key} className='card'>
          <Link className='card__img--link' to='/details'><img className='card__image' src={image} alt='workshop'/></Link>
          <div className='card__description'>
            <div className='date'>
                <img src={Calendar} alt=''/><span> {new Date(dateAndTime).toDateString() }</span>
              <img src={Watch} className='smallPush' alt=''/><span> {new Date(dateAndTime).toLocaleTimeString().slice(0, 8).concat('h') }</span>
            </div>
            <div className='title'>
              <Link to='/details' className='title__link'>
                {title} 
              </Link>
            </div>
            <div className='priceAndCard'>
              <div className='price'>{price}<span>EUR</span></div>
              <button className='addButton'><div>Add to cart</div><img src={ShoppingCart} alt='' /></button>
            </div>
          </div>
        </div>
    );
}

export default Card;