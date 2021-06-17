import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J3QVEGVnHYnFoPCrkc3ZyxHpuMyapaxee9Vo0wXWbpAc2WgtM7X3yxHcN2zvay61ha3JpwZX3103bq1hFcfqfWp00QB1wWbsE';

    const onToken = token => {
        console.log( token );
        alert( 'Payment Successful' );
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={ `Your total is $${ price }` }
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    );
};

export default StripeCheckoutButton;
