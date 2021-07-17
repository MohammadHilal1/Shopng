import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JE5DtSAUtgh7kdNPhTOcLIzhIlGp5F2HX1JJZHJn9PG02JuzaGQm2cE4V4HJxZZe5u6ksMyiO6YGSxDhfADvk6P00Vcpf3TsY'

    const onToken = (token) => {
        console.log(token)
    }

    return(
        <StripeCheckout
        label = 'Pay Now'
        name = 'Shopng Clothing Ltd'
        billingAddress
        shippingAddress
        description = {`Your total price is $${price}`}
        image = 'https://svgshare.com/i/CUz.svg'
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}/>
    )
}

export default StripeCheckoutButton
