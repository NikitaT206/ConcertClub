import { Link } from 'react-router-dom'
import tiketBuyerStyles from './TiketBuyer.module.css'

export default function TiketBuyer() {
  return (
    <li className={tiketBuyerStyles.container}>
      <h4 className={tiketBuyerStyles.name}>Иванов Cемен</h4>
      <p className={tiketBuyerStyles.city}>Санкт-Петербург</p>
      <Link to={''} className={tiketBuyerStyles.button}>Смотреть Профиль</Link>
    </li>
  )
}