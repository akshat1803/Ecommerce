import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = ({cartItem , setCartItem}) => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'><h1>ECOMMERCE</h1></div>
        <div className='header'>
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">SHOP</a></li>
            <li><a href="">FOR-MENS</a></li>
            <li><a href="">FOR-WOMENS</a></li>
            <li><a href=""><ShoppingCartIcon/></a></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
