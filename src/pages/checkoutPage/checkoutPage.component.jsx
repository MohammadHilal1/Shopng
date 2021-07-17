import React from 'react'

import './checkoutPage.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCartItemsTotal } from '../../redux/cart/cart.selectors'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckOutPage = ({cartItems, total}) => (
    <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
                

                
            </div>
            {
                    cartItems.map(cartItem => (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            <div className="total">
                    <span>TOTAL: ${total}</span>
            </div>
            <StripeCheckoutButton price={total}/>
            <div className="test-warning">
                *Please use the following test credit card details for payment
                <br/>
                4242 4242 4242 4242 - exp: any future date from your current date - cvv: 123
            </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems,
total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckOutPage)