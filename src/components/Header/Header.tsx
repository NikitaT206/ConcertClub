import { Link } from 'react-router-dom'
import headerStyles from './Header.module.css'

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.flexContainer}>

        <h1 className={headerStyles.title}><Link className={headerStyles.link} to='/'>Concert CLUB</Link></h1>

        <nav className={headerStyles.navigation}>
          <button className={headerStyles.button}>Версия для слабовидящих</button>
          <Link className={headerStyles.button} to='/profile'>Мой профиль</Link>
        </nav>

      </div>
    </header>
  )
}