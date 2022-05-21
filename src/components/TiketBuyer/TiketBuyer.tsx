import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { User } from '../../types/users'
import tiketBuyerStyles from './TiketBuyer.module.css'

export default function TiketBuyer(props: {user: User}) {
  const {setUser} = useActions()
  return (
    <li className={tiketBuyerStyles.container}>
      <h4 className={tiketBuyerStyles.name}>{props.user.name}</h4>
      <p className={tiketBuyerStyles.city}>{props.user.address.city}</p>
      <Link to={`/${props.user.name}`} onClick={() => setUser(props.user)} className={tiketBuyerStyles.button}>Смотреть Профиль</Link>
    </li>
  )
}