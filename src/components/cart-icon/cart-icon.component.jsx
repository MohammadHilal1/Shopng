import React from 'react'

import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCartHidden, itemCounts}) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}/>
        <span className="item-count">{itemCounts}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCounts: selectCartItemsCount(state)
})
    


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)