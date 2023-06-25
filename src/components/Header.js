import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import { DataContext } from "./Context"
function Header() {
   const value = useContext(DataContext)
   const [cart] = value.cart
     const [menu, setMenu] = useState(false);

     const toggleMenu = () => {
          setMenu(!menu);
     }

     const styleMenu = {
          right: menu ? 0 : "-100%"
     }

  return (
    <header>
         <div className="cart-icon">
              <span>{cart.length}</span>
              <Link to="/cart">
                    <FaShoppingBag />
              </Link>
         </div>
         <ul style={styleMenu}>
              <li onClick={toggleMenu}><Link  to="/">خانه</Link></li>
              <li onClick={toggleMenu}><Link to="/products">محصولات</Link></li>
              <li onClick={toggleMenu}><Link to="/">درباره ما</Link></li>
              <li onClick={toggleMenu}><Link to="/">تماس با ما</Link></li>
              <li onClick={toggleMenu}><Link to="/">ثبت نام / ورود</Link></li>
              <li onClick={toggleMenu}> <img src={Close} width="30" className='menu' onClick={toggleMenu} alt=""/></li>
         </ul>
         <div className="logo">
              <Link to="/">ModernKala</Link>
         </div>
         <div className="menu" onClick={toggleMenu}>
              <img src={Menu} width="30" alt="" />
         </div>
    </header>

  )
}

export default Header