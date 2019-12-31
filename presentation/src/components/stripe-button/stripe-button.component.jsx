/* Framework */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    //TODO move this outside of code into a cloud build config
    const publishableKey = 'pk_test_eSBaVaNQBYqLMMs8o57PRbmU00gJTLGz7J';

    //TODO connect to backend
    const onToken = token => {
        console.log(token);
        
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Skull Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/H4W.svg'
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;
