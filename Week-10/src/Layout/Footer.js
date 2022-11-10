import React from 'react'
import style from './layout.module.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className={style.footer}>
        <p>Copyright @ {year}</p>

      </footer>
    </>
  )
}

export default Footer