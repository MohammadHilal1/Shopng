import React from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component.jsx';

import SHOP_DATA from './shop.data.js'

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state
        return(
        <div className='shoppage'>
            {
                collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps}/>
                ))}
            
        </div>);
    }
}

export default ShopPage