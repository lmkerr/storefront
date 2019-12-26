/* Framework */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/* Internal */
import './collection-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
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
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
