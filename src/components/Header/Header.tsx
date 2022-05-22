import { Link } from 'react-router-dom'
import headerStyles from './Header.module.css'
import { userMe } from '../../utils/constants'
import { useActions } from '../../hooks/useActions'

export default function Header() {
  const {setCurrentUser} = useActions()

  function setCurrentUserHandler() {
    setCurrentUser(userMe)
    localStorage.setItem('currentUser', JSON.stringify(userMe))
  }

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.flexContainer}>

        <h1 className={headerStyles.title}>
          <Link className={headerStyles.link} to='/'>Concert CLUB</Link>
        </h1>

        <nav className={headerStyles.navigation}>
          <button className={headerStyles.vButton}>Версия для слабовидящих</button>
          <Link className={headerStyles.profileButton} to='/profile' onClick={setCurrentUserHandler}>Мой профиль</Link>
        </nav>

      </div>
    </header>
  )
}