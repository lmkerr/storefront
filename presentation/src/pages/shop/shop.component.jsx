/* Framework */
import React from 'react';

/* Internal */
//import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isLoaded: false,
      collections: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/shop')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            collections: result,
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            collection: [],
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, collections } = this.state;

    if(error) {
      return <div> Error:  {error.message}</div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className='shop-page'>
          {collections.map(({ id, ...otherCollectionsProps }) => (
            <CollectionPreview key={id} {...otherCollectionsProps} />
          ))}
        </div>
      );
    }
  }
}

export default ShopPage;
