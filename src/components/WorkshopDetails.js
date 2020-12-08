import { Link } from 'react-router-dom';
import BackArrow from '../styles/assets/BackArrow.svg';
import DropdownArrow from '../styles/assets/DropdownArrow.svg';
import DetailsImage from '../styles/assets/DetailsImage.svg';
import Calendar from '../styles/assets/Calendar.svg';
import Watch from '../styles/assets/Watch.svg';
import Brush from '../styles/assets/Brush.svg';

const WorkshopDetails = () => {
    return (
        <div className='details'>
            <div className='details__item'>
                <div className='details__item__goBack'>
                    <Link to='/' className='goBack__link' >
                        <img src={BackArrow} alt='' />
                        <span>Natrag</span>
                    </Link>
                </div>
                <div className='details__item__product'>
                    <div className='product_img'>
                        <img src={DetailsImage} alt='' />
                    </div>
                    <div className='desc_wrap'>
                        <div className='details_desc'>
                            <div className='timing'>
                                <div className='brush_frame'><img src={Brush} alt=''/></div>
                                <img src={Calendar} alt=''/><span>Sub 27.6.2020.</span>
                                <img src={Watch} className='smallPush' alt=''/><span>09:00 h</span>
                            </div>
                            <div className='details_title'>Interaction Design Workshop</div>
                            <div className='author'>
                            <span>WITH</span>Marko Maljković
                            </div>
                            <span className='text'>Anim tempor reprehenderit minim veniam sit ipsum voluptate ex elit qui sunt amet culpa dolor.</span>
                        </div>
                        <div className='purchase_wrap'>
                            <div className='purchase_box'>
                                <span className='purchase_box__heading'>Buy Your Ticket</span>
                                <div className='purchase_box__price'>495,00<span>EUR</span></div>
                                <div className='purchase_box__picker'>
                                    <button className='quantity'><img src={DropdownArrow} alt=''/>10</button><button className='addButton'>Add to Cart</button>
                                </div>
                                <div className='purchase_box__sum'><span>Subtotal:4.950,00 HRK</span></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='details__similar'>
            </div>
        </div>
    );
}

export default WorkshopDetails;