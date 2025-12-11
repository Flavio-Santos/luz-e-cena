import React, { type HTMLAttributes } from 'react'
import style from './MenuList.module.css'
const MenuList = ({children}: HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
        <ul className={style.navegacao}>
            {children}
        </ul>
    </nav>
  )
}

export default MenuList
