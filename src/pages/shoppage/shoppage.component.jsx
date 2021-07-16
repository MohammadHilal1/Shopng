import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collectionPage/collectionPage.component';


const ShopPage = ({match}) => (

    <div className='shoppage'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        
    </div>
)


export default ShopPage