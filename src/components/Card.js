import Calendar from '../styles/assets/Calendar.svg';
import Watch from '../styles/assets/Watch.svg';
import ShoppingCart from '../styles/assets/ShoppingCart.svg';
import {Link} from "react-router-dom";


const Card = ({workshops, displayed}) => {
    return workshops.slice(0, displayed).map(workshop => (
        <div key={workshop.id} className='card'>
          <Link className='card__img--link' to='/details'><img className='card__image' src={workshop.imageUrl} alt='workshop'/></Link>
          <div className='card__description'>
            <div className='date'>
                <img src={Calendar} alt=''/><span> {new Date(workshop.date).toDateString() }</span>
              <img src={Watch} className='smallPush' alt=''/><span> {new Date(workshop.date).toLocaleTimeString().slice(0, 8).concat('h') }</span>
            </div>
            <div className='title'>
                {workshop.title} 
            </div>
            <div className='priceAndCard'>
              <div className='price'>{workshop.price}<span>EUR</span></div>
              <button className='addButton'><div>Add to cart</div><img src={ShoppingCart} alt='' /></button>
            </div>
          </div>
        </div>
    ));
}

export default Card;