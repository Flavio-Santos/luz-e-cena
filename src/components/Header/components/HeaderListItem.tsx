import style from '../Header.module.css'

const HeaderListItem = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={style.menuitem}>
      {children}
    </li>
  )
}

export default HeaderListItem
