import React from 'react';

const LoadMore = ({handleDisplayed, loadLink}) => {
    if (loadLink) { 
    return (
            <div className='loadMore'>
                <p 
                className='loadMore__link'
                onClick={handleDisplayed}
                >
                    Load More
                </p>
            </div>
    );
    }
    else if (!loadLink) {
        return (
            null
    );
    }
}

export default LoadMore;