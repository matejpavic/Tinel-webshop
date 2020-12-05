import React from 'react';

const LoadMore = ({handleDisplayed}) => {
    return (
        <button 
        className='loadMore'
        onClick={handleDisplayed}
        >
            Load More.
        </button>
    );
}

export default LoadMore;