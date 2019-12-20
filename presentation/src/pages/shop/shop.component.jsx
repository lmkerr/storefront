/* Framework */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/* Internal */
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (
  
  <div className='shop-page'>
    {
      collections 
      ? collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
        )) 
      :
    <div>Unable to find data...</div>
    }
  </div>

);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(ShopPage);
