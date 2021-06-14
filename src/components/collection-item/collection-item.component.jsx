import React from 'react'

import './collection-item.styles.scss';

const CollectionItem = ({id, price, name, imageUrl}) => (
    <div className='collection-item'>
        <div className='image' 
        style={{
            backgroundImage: `url(${imageUrl})`}}
        />
        <div className='collection-footer'>
            <span classname='name'>{name}</span>
            <span classname='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;