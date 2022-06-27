import React from 'react';
import BaseSkeletons from './baseSkeletons';
import "./cardsStyle.css"

const CardsSkeletons = () => {
    return (
        <div className='skeletons-wrapper mb-2'>
            <BaseSkeletons type={'title'}  />
            <div className="row mt-2">
                <div className="col mb-3">
                    <BaseSkeletons type={'text'} />
                </div>
                <div className="col">
                    <BaseSkeletons type={'text'} />
                </div>
            </div>

        </div>
    );
}

export default CardsSkeletons;
