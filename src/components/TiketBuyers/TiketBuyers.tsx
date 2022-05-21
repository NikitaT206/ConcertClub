import { useTypedSelector } from '../../hooks/useTypedSelector'
import TiketBuyer from '../TiketBuyer/TiketBuyer'
import tiketBuyersStyles from './TiketBuyers.module.css'

export default function TiketBuyers() {
  const users = useTypedSelector(state => state.users.users)

  return (
    <div className={tiketBuyersStyles.container}>

      <div className={tiketBuyersStyles.flexContainer}>
        <h3 className={tiketBuyersStyles.title}>Купили билеты</h3>

        <div className={tiketBuyersStyles.ammountContainer}>
          <span className={tiketBuyersStyles.ammountBlack}>1/ </span>
          <span className={tiketBuyersStyles.totalAmmount}>{users.length}</span>
        </div>
      </div>

      <ul className={tiketBuyersStyles.list}>
        {users && users.map((user, index) => {
          return <TiketBuyer user={user} key={index}/>
        })}
      </ul>

    </div>
  )
}