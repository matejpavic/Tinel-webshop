import React from 'react';
import WorkShopsList from '../components/WorkShopsList';
import ListHeading from '../components/ListHeading';
import LoadMore from '../components/LoadMore';

const Main = ({workshops, displayed, handleDisplayed}) => {
    return (
        <div className='main'>
            <ListHeading workshops = {workshops} displayed = {displayed} />
            <WorkShopsList workshops = {workshops} displayed = {displayed} />
            <LoadMore workshops = {workshops} displayed = {displayed} handleDisplayed = {handleDisplayed}/>
        </div>
    );
}

export default Main;