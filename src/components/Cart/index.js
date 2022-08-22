// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header/index'

const Cart = () => {
  const jwt = Cookies.get('jwt_token')
  if (jwt !== undefined) {
    return (
      <div className="product-container">
        <Header />
        <div className="pro-box">
          <img
            className="product-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
          />
        </div>
      </div>
    )
  }
  return <Redirect to="/login" />
}

export default Cart
