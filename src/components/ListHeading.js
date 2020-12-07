import React from 'react';

const ListHeading = ({workshops, displayed}) => {
    return (
        <div>
            <div className='listHeading'>
                <div className='listHeading__title'>Workshops</div>
                <div className='listHeading__displayed'>Displayed: <span>{displayed}</span></div>
            </div>
        </div>
    );
}

export default ListHeading;