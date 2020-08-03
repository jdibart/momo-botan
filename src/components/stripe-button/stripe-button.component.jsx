import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HC9b0EhQggKfDFnC6DHon5eX7FGWr1Xi3kieQu9IIdoEfWfCOr2hXwqkJa7G0eOs7MM34bTornzuUznitn7o9ro00M0As2xaR'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='THREADfin Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;