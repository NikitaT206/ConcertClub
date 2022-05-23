import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { User } from '../../types/users'
import tiketBuyerStyles from './TiketBuyer.module.css'

export default function TiketBuyer(props: {user: User}) {
  const {setCurrentUser, getPosts, erasePosts, setUserPublications} = useActions()

  function setCurrentUserHandler() {
    erasePosts()
    setUserPublications([])
    setCurrentUser(props.user)
    getPosts(props.user.id)
  }

  return (
    <li className={tiketBuyerStyles.container}>
      <h4 className={tiketBuyerStyles.name}>{props.user.name}</h4>
      <p className={tiketBuyerStyles.city}>{props.user.address.city}</p>
      <Link 
        to={`/users/${props.user.name}`} 
        onClick={setCurrentUserHandler} 
        className={tiketBuyerStyles.button}
      >Смотреть Профиль</Link>
    </li>
  )
}