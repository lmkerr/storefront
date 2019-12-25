/* Framework */
import React from 'react';

/* Internal */
import './collection.styles.scss';
import '../../components/collection-item/collection-item.component';

const CollectionPage = ({ match }) => {
    console.log(match);
    return (
        <div className='collection'>
            <h2>COLLECTION PAGE</h2>
        </div>
    );
}

export default CollectionPage;