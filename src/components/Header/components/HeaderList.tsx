import style from '../Header.module.css'

const HeaderList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={style.cabecalho}>
      {children}
    </ul>
  )
}

export default HeaderList
