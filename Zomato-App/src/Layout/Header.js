import React from 'react'
import style from './layout.module.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>  
        <nav className={style.navbar}>
            <div className={style.logo}>
                <strong>Zomato</strong>
            </div>
            <div className={style.menuList}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </div>
        </nav>
    </>
  )
}

export default Header